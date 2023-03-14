export interface Period {
    start: string | null;
    end: string | null;
}

export interface Configs {
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
}

export interface ShortcutsItem {
    text?: string;
    daysNumber?: number;
    period?: {
        start: string;
        end: string;
    };
}

export type DateType = string | null | Date | number;

export type DateRangeType = {
    startDate: DateType;
    endDate: DateType;
};

export type DateValueType = DateRangeType | null;

export type ClassNamesTypeProp = {
    container?: (p?: object | null | undefined) => string | undefined;
    input?: (p?: object | null | undefined) => string | undefined;
    toggleButton?: (p?: object | null | undefined) => string | undefined;
    footer?: (p?: object | null | undefined) => string | undefined;
};

export type ClassNameParam =
    | ClassNameParam[]
    | string
    | number
    | boolean
    | undefined;
