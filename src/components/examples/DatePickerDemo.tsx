"use client";

import React, { useState } from "react";

import type { DateValueType } from "@/types/calendar";
import DatePicker from "@/components/ui/calendar/DatePicker";

const DatePickerDemo = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: null,
    });

    const handleValueChange = (newValue: DateValueType) => {
        setValue(newValue);
    };

    return (
        <div>
            <DatePicker
                value={value}
                onChange={handleValueChange}
                asSingle
                useRange={false}
            />
        </div>
    );
};

export default DatePickerDemo;
