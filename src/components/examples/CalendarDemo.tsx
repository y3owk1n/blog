"use client";

import React, { useState } from "react";

import type { DateValueType } from "@/types/calendar";
import Calendar from "@/components/ui/calendar/Calendar";

const CalendarDemo = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: null,
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
                asSingle
                useRange={false}
            />
        </div>
    );
};

export default CalendarDemo;
