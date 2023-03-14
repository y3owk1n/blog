import type React from "react";
import { createContext } from "react";
import type dayjs from "dayjs";

import type {
    ClassNameParam,
    ClassNamesTypeProp,
    Configs,
    DateRangeType,
    DateType,
    DateValueType,
    Period,
} from "@/types/calendar";
import { DATE_FORMAT, LANGUAGE, START_WEEK, type ColorType } from "./constants";

interface DatepickerStore {
    input?: React.RefObject<HTMLInputElement>;
    asSingle?: boolean;
    primaryColor: ColorType;
    configs?: Configs | null;
    calendarContainer: React.RefObject<HTMLDivElement> | null;
    hideDatepicker: () => void;
    period: Period;
    changePeriod: (period: Period) => void;
    dayHover: string | null;
    changeDayHover: (day: string | null) => void;
    inputText: string;
    changeInputText: (text: string) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    changeDatepickerValue: (
        value: DateValueType,
        e?: HTMLInputElement | null | undefined
    ) => void;
    showFooter?: boolean;
    placeholder?: string | null;
    separator?: string;
    i18n: string;
    value: DateValueType;
    disabled?: boolean;
    inputClassName?: string | null;
    containerClassName?: string | null;
    toggleClassName?: string | null;
    toggleIcon?: (open: boolean) => React.ReactNode;
    readOnly?: boolean;
    startWeekOn?: string | null;
    displayFormat?: string;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    disabledDates?: DateRangeType[] | null;
    inputId?: string;
    inputName?: string;
    classNames?: ClassNamesTypeProp | undefined;
}

const DatepickerContext = createContext<DatepickerStore>({
    input: undefined,
    primaryColor: "blue",
    calendarContainer: null,
    hideDatepicker: () => Object,
    period: { start: null, end: null },
    changePeriod: (period) => Object,
    dayHover: null,
    changeDayHover: (day: string | null) => Object,
    inputText: "",
    changeInputText: (text) => Object,
    updateFirstDate: (date) => Object,
    changeDatepickerValue: (
        value: DateValueType,
        e: HTMLInputElement | null | undefined
    ) => Object,
    showFooter: false,
    value: null,
    i18n: LANGUAGE,
    disabled: false,
    inputClassName: "",
    containerClassName: "",
    toggleClassName: "",
    readOnly: false,
    displayFormat: DATE_FORMAT,
    minDate: null,
    maxDate: null,
    disabledDates: null,
    inputId: undefined,
    inputName: undefined,
    startWeekOn: START_WEEK,
    toggleIcon: undefined,
    classNames: undefined,
});

export default DatepickerContext;
