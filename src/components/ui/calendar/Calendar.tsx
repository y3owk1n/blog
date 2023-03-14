"use client";

import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

import type {
    ClassNameParam,
    ClassNamesTypeProp,
    DateRangeType,
    DateType,
    DateValueType,
    Period,
} from "@/types/calendar";
import CalendarCore from "./CalendarCore";
import {
    COLORS,
    DATE_FORMAT,
    DEFAULT_COLOR,
    LANGUAGE,
    type ColorType,
} from "./constants";
import DatepickerContext from "./context";
import { formatDate, nextMonth, previousMonth } from "./helpers";

interface Props {
    primaryColor?: ColorType;
    value: DateValueType;
    onChange: (
        value: DateValueType,
        e?: HTMLInputElement | null | undefined
    ) => void;
    useRange?: boolean;
    showFooter?: boolean;
    showShortcuts?: boolean;
    configs?: {
        shortcuts?: {
            today?: string;
            yesterday?: string;
            past?: (period: number) => string;
            currentMonth?: string;
            pastMonth?: string;
        } | null;
        footer?: {
            cancel?: string;
            apply?: string;
        } | null;
    } | null;
    asSingle?: boolean;
    placeholder?: string;
    separator?: string;
    startFrom?: Date | null;
    i18n?: string;
    disabled?: boolean;
    classNames?: ClassNamesTypeProp | undefined;
    inputClassName?: string | null;
    toggleClassName?: string | null;
    toggleIcon?: ((open: ClassNameParam) => React.ReactNode) | undefined;
    inputId?: string;
    inputName?: string;
    containerClassName?: string | null;
    displayFormat?: string;
    readOnly?: boolean;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    disabledDates?: DateRangeType[] | null;
    startWeekOn?: string | null;
}

const Calendar: React.FC<Props> = ({
    primaryColor = "slate",
    value = null,
    onChange,
    useRange = true,
    showFooter = false,
    showShortcuts = false,
    configs = null,
    asSingle = false,
    placeholder = null,
    separator = "~",
    startFrom = null,
    i18n = LANGUAGE,
    disabled = false,
    inputClassName = null,
    containerClassName = null,
    toggleClassName = null,
    toggleIcon = undefined,
    displayFormat = DATE_FORMAT,
    readOnly = false,
    minDate = null,
    maxDate = null,
    disabledDates = null,
    inputId,
    inputName,
    startWeekOn = "sun",
    classNames = undefined,
}) => {
    // Ref
    const containerRef = useRef<HTMLDivElement>(null);
    const calendarContainerRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    // State
    const [firstDate, setFirstDate] = useState<dayjs.Dayjs>(
        startFrom && dayjs(startFrom).isValid() ? dayjs(startFrom) : dayjs()
    );
    const [secondDate, setSecondDate] = useState<dayjs.Dayjs>(
        nextMonth(firstDate)
    );
    const [period, setPeriod] = useState<Period>({
        start: null,
        end: null,
    });
    const [dayHover, setDayHover] = useState<string | null>(null);

    /* Start First */
    const firstGotoDate = useCallback(
        (date: dayjs.Dayjs) => {
            const newDate = dayjs(formatDate(date));
            const reformatDate = dayjs(formatDate(secondDate));
            if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
                setSecondDate(nextMonth(date));
            }
            setFirstDate(date);
        },
        [secondDate]
    );

    const previousMonthFirst = useCallback(() => {
        setFirstDate(previousMonth(firstDate));
    }, [firstDate]);

    const nextMonthFirst = useCallback(() => {
        firstGotoDate(nextMonth(firstDate));
    }, [firstDate, firstGotoDate]);

    const changeFirstMonth = useCallback(
        (month: number) => {
            firstGotoDate(
                dayjs(`${firstDate.year()}-${month < 10 ? "0" : ""}${month}-01`)
            );
        },
        [firstDate, firstGotoDate]
    );

    const changeFirstYear = useCallback(
        (year: number) => {
            firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`));
        },
        [firstDate, firstGotoDate]
    );
    /* End First */

    /* Start Second */
    const secondGotoDate = useCallback(
        (date: dayjs.Dayjs) => {
            const newDate = dayjs(formatDate(date, displayFormat));
            const reformatDate = dayjs(formatDate(firstDate, displayFormat));
            if (
                newDate.isSame(reformatDate) ||
                newDate.isBefore(reformatDate)
            ) {
                setFirstDate(previousMonth(date));
            }
            setSecondDate(date);
        },
        [firstDate, displayFormat]
    );

    const previousMonthSecond = useCallback(() => {
        secondGotoDate(previousMonth(secondDate));
    }, [secondDate, secondGotoDate]);

    const nextMonthSecond = useCallback(() => {
        setSecondDate(nextMonth(secondDate));
    }, [secondDate]);

    const changeSecondMonth = useCallback(
        (month: number) => {
            secondGotoDate(
                dayjs(
                    `${secondDate.year()}-${month < 10 ? "0" : ""}${month}-01`
                )
            );
        },
        [secondDate, secondGotoDate]
    );

    const changeSecondYear = useCallback(
        (year: number) => {
            secondGotoDate(dayjs(`${year}-${secondDate.month() + 1}-01`));
        },
        [secondDate, secondGotoDate]
    );
    /* End Second */

    useEffect(() => {
        if (value && value.startDate && value.endDate) {
            const startDate = dayjs(value.startDate);
            const endDate = dayjs(value.endDate);
            const validDate = startDate.isValid() && endDate.isValid();
            const condition =
                validDate &&
                (startDate.isSame(endDate) || startDate.isBefore(endDate));
            if (condition) {
                setPeriod({
                    start: formatDate(startDate),
                    end: formatDate(endDate),
                });
            }
        }

        if (value && value.startDate === null && value.endDate === null) {
            setPeriod({
                start: null,
                end: null,
            });
        }
    }, [asSingle, value, displayFormat, separator]);

    useEffect(() => {
        if (startFrom && dayjs(startFrom).isValid()) {
            if (value?.startDate != null) {
                setFirstDate(dayjs(value.startDate));
                setSecondDate(nextMonth(dayjs(value.startDate)));
            } else {
                setFirstDate(dayjs(startFrom));
                setSecondDate(nextMonth(dayjs(startFrom)));
            }
        }
    }, [startFrom, value]);

    // Variables
    const colorPrimary = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return primaryColor;
        }
        return DEFAULT_COLOR;
    }, [primaryColor]);
    const contextValues = useMemo(() => {
        return {
            asSingle,
            primaryColor: colorPrimary,
            configs,
            calendarContainer: calendarContainerRef,
            arrowContainer: arrowRef,
            hideDatepicker: () => Object,
            period,
            changePeriod: (newPeriod: Period) => setPeriod(newPeriod),
            dayHover,
            changeDayHover: (newDay: string | null) => setDayHover(newDay),
            inputText: "",
            changeInputText: (newText: string) => Object,
            updateFirstDate: (newDate: dayjs.Dayjs) => firstGotoDate(newDate),
            changeDatepickerValue: onChange,
            showFooter,
            placeholder,
            separator,
            i18n,
            value,
            disabled,
            inputClassName,
            containerClassName,
            toggleClassName,
            toggleIcon,
            readOnly,
            displayFormat,
            minDate,
            maxDate,
            disabledDates,
            inputId,
            inputName,
            startWeekOn,
            classNames,
            onChange,
            input: undefined,
        };
    }, [
        asSingle,
        colorPrimary,
        configs,
        period,
        dayHover,
        onChange,
        showFooter,
        placeholder,
        separator,
        i18n,
        value,
        disabled,
        inputClassName,
        containerClassName,
        toggleClassName,
        toggleIcon,
        readOnly,
        displayFormat,
        firstGotoDate,
        minDate,
        maxDate,
        disabledDates,
        inputId,
        inputName,
        startWeekOn,
        classNames,
    ]);

    return (
        <DatepickerContext.Provider value={contextValues}>
            <div
                className={twMerge(`w-fit`, containerClassName)}
                ref={containerRef}>
                <div
                    className="text-sm lg:text-xs 2xl:text-sm"
                    ref={calendarContainerRef}>
                    <div className="mt-2.5 rounded-lg border border-slate-200 bg-white px-1 py-0.5 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                        <div className="flex flex-col py-2 lg:flex-row">
                            {/* {showShortcuts && <Shortcuts />} */}

                            <div
                                className={`flex flex-col items-stretch space-y-4 md:flex-row md:space-y-0 md:space-x-1.5 ${
                                    showShortcuts ? "md:pl-2" : "md:pl-1"
                                } pr-2 lg:pr-1`}>
                                <CalendarCore
                                    date={firstDate.toDate()}
                                    onClickPrevious={previousMonthFirst}
                                    onClickNext={nextMonthFirst}
                                    changeMonth={changeFirstMonth}
                                    changeYear={changeFirstYear}
                                />

                                {useRange && (
                                    <>
                                        {/* <div className="flex items-center"> */}
                                        {/*     <VerticalDash /> */}
                                        {/* </div> */}

                                        <CalendarCore
                                            date={secondDate.toDate()}
                                            onClickPrevious={
                                                previousMonthSecond
                                            }
                                            onClickNext={nextMonthSecond}
                                            changeMonth={changeSecondMonth}
                                            changeYear={changeSecondYear}
                                        />
                                    </>
                                )}
                            </div>
                        </div>

                        {/* {showFooter && <Footer />} */}
                    </div>
                </div>
            </div>
        </DatepickerContext.Provider>
    );
};

export default Calendar;
