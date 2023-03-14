"use client";

import React, { useState } from "react";

import type { DateValueType } from "@/types/calendar";
import Calendar from "../ui/calendar/Calendar";

const CalendarMultipleDemo = () => {
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
            <Calendar
                value={value}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default CalendarMultipleDemo;
