"use client";

import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/20/solid";
import dayjs from "dayjs";

import { Button } from "../Button";
import Days from "./Days";
import Months from "./Months";
import Weeks from "./Weeks";
import Years from "./Years";
import { CALENDAR_SIZE } from "./constants";
import DatepickerContext from "./context";
import {
    formatDate,
    getDaysInMonth,
    getFirstDayInMonth,
    getFirstDaysInMonth,
    getLastDaysInMonth,
    getNumberOfDay,
    loadLanguageModule,
    nextMonth,
    previousMonth,
} from "./helpers";

interface Props {
    date: Date;
    onClickPrevious: () => void;
    onClickNext: () => void;
    changeMonth: (month: number) => void;
    changeYear: (year: number) => void;
}

const CalendarBase: React.FC<Props> = ({
    date,
    onClickPrevious,
    onClickNext,
    changeMonth,
    changeYear,
}) => {
    // Contexts
    const {
        period,
        changePeriod,
        changeDayHover,
        showFooter,
        changeDatepickerValue,
        hideDatepicker,
        asSingle,
        i18n,
        startWeekOn,
        input,
    } = useContext(DatepickerContext);
    loadLanguageModule(i18n);

    const parsedDate = dayjs(date);

    const parsedYear = parsedDate.year();

    // States
    const [showMonths, setShowMonths] = useState(false);
    const [showYears, setShowYears] = useState(false);
    const [year, setYear] = useState(parsedDate.year());
    // Functions
    const previous = useCallback(() => {
        return getLastDaysInMonth(
            previousMonth(parsedDate),
            getNumberOfDay(getFirstDayInMonth(parsedDate).ddd, startWeekOn)
        );
    }, [parsedDate, startWeekOn]);

    const current = useCallback(() => {
        return getDaysInMonth(formatDate(parsedDate));
    }, [parsedDate]);

    const next = useCallback(() => {
        return getFirstDaysInMonth(
            previousMonth(parsedDate),
            CALENDAR_SIZE - (previous().length + current().length)
        );
    }, [current, parsedDate, previous]);

    const hideMonths = useCallback(() => {
        showMonths && setShowMonths(false);
    }, [showMonths]);

    const hideYears = useCallback(() => {
        showYears && setShowYears(false);
    }, [showYears]);

    const clickMonth = useCallback(
        (month: number) => {
            setTimeout(() => {
                changeMonth(month);
                setShowMonths(!showMonths);
            }, 250);
        },
        [changeMonth, showMonths]
    );

    const clickYear = useCallback(
        (year: number) => {
            setTimeout(() => {
                changeYear(year);
                setShowYears(!showYears);
            }, 250);
        },
        [changeYear, showYears]
    );

    const clickDay = useCallback(
        (
            day: number,
            month = parsedDate.month() + 1,
            year = parsedDate.year()
        ) => {
            const fullDay = `${year}-${month}-${day}`;
            let newStart;
            let newEnd = null;

            function chosePeriod(start: string, end: string) {
                const ipt = input?.current;
                changeDatepickerValue(
                    {
                        startDate: dayjs(start).format("YYYY-MM-DD"),
                        endDate: dayjs(end).format("YYYY-MM-DD"),
                    },
                    ipt
                );
                hideDatepicker();
            }

            if (period.start && period.end) {
                if (changeDayHover) {
                    changeDayHover(null);
                }
                changePeriod({
                    start: null,
                    end: null,
                });
            }

            if (
                (!period.start && !period.end) ||
                (period.start && period.end)
            ) {
                if (!period.start && !period.end) {
                    changeDayHover(fullDay);
                }
                newStart = fullDay;
                if (asSingle) {
                    newEnd = fullDay;
                    chosePeriod(fullDay, fullDay);
                }
            } else {
                if (period.start && !period.end) {
                    // start not null
                    // end null
                    const condition =
                        dayjs(fullDay).isSame(dayjs(period.start)) ||
                        dayjs(fullDay).isAfter(dayjs(period.start));
                    newStart = condition ? period.start : fullDay;
                    newEnd = condition ? fullDay : period.start;
                } else {
                    // Start null
                    // End not null
                    const condition =
                        dayjs(fullDay).isSame(dayjs(period.end)) ||
                        dayjs(fullDay).isBefore(dayjs(period.end));
                    newStart = condition ? fullDay : period.start;
                    newEnd = condition ? period.end : fullDay;
                }

                if (!showFooter) {
                    if (newStart && newEnd) {
                        chosePeriod(newStart, newEnd);
                    }
                }
            }

            if (!(newEnd && newStart) || showFooter) {
                changePeriod({
                    start: newStart,
                    end: newEnd,
                });
            }
        },
        [
            asSingle,
            changeDatepickerValue,
            changeDayHover,
            changePeriod,
            parsedDate,
            hideDatepicker,
            period.end,
            period.start,
            showFooter,
            input,
        ]
    );

    const clickPreviousDays = useCallback(
        (day: number) => {
            const newDate = previousMonth(parsedDate);
            clickDay(day, newDate.month() + 1, newDate.year());
            onClickPrevious();
        },
        [clickDay, parsedDate, onClickPrevious]
    );

    const clickNextDays = useCallback(
        (day: number) => {
            const newDate = nextMonth(parsedDate);
            clickDay(day, newDate.month() + 1, newDate.year());
            onClickNext();
        },
        [clickDay, parsedDate, onClickNext]
    );

    // UseEffects & UseLayoutEffect
    useEffect(() => {
        setYear(parsedYear);
    }, [parsedYear]);

    // Variables
    const calendarData = useMemo(() => {
        return {
            date: parsedDate,
            days: {
                previous: previous(),
                current: current(),
                next: next(),
            },
        };
    }, [current, parsedDate, next, previous]);

    return (
        <div className="w-full md:w-[297px] md:min-w-[297px]">
            <div className="flex items-center space-x-1.5 rounded-md border border-slate-200 px-2 py-1.5 dark:border-slate-700">
                {!showMonths && !showYears && (
                    <div className="flex-none">
                        <Button
                            variant="ghost"
                            onClick={onClickPrevious}>
                            <ChevronLeftIcon className="h-5 w-5" />
                        </Button>
                    </div>
                )}

                {showYears && (
                    <div className="flex-none">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setYear((year) => year - 12);
                            }}>
                            <ChevronDoubleLeftIcon className="h-5 w-5" />
                        </Button>
                    </div>
                )}

                <div className="flex flex-1 items-center space-x-1.5">
                    <div className="w-1/2">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setShowMonths(!showMonths);
                                hideYears();
                            }}>
                            <>{calendarData.date.locale(i18n).format("MMM")}</>
                        </Button>
                    </div>

                    <div className="w-1/2">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setShowYears(!showYears);
                                hideMonths();
                            }}>
                            <>{calendarData.date.year()}</>
                        </Button>
                    </div>
                </div>

                {showYears && (
                    <div className="flex-none">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setYear((year) => year + 12);
                            }}>
                            <ChevronDoubleRightIcon className="h-5 w-5" />
                        </Button>
                    </div>
                )}

                {!showMonths && !showYears && (
                    <div className="flex-none">
                        <Button
                            variant="ghost"
                            onClick={onClickNext}>
                            <ChevronRightIcon className="h-5 w-5" />
                        </Button>
                    </div>
                )}
            </div>

            <div className="mt-0.5 min-h-[285px] px-0.5 sm:px-2">
                {showMonths && <Months clickMonth={clickMonth} />}

                {showYears && (
                    <Years
                        year={year}
                        clickYear={clickYear}
                    />
                )}

                {!showMonths && !showYears && (
                    <>
                        <Weeks />

                        <Days
                            calendarData={calendarData}
                            onClickPreviousDays={clickPreviousDays}
                            onClickDay={clickDay}
                            onClickNextDays={clickNextDays}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default CalendarBase;
