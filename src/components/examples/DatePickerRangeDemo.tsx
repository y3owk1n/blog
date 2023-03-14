"use client";

import React, { useState } from "react";

import type { DateValueType } from "@/types/calendar";
import DatePicker from "../ui/calendar/DatePicker";

const DatePickerRangeDemo = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <DatePicker
                value={value}
                onChange={handleValueChange}
                useRange={false}
            />
        </div>
    );
};

export default DatePickerRangeDemo;
