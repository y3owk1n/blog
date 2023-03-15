"use client";

import React, { useState } from "react";
import dayjs from "dayjs";

import { Label } from "@/components/ui/Label";
import { TimeInput } from "@/components/ui/TimeInput";

const TimeInputWithLabelDemo = () => {
    const [value, setValue] = useState<string>(dayjs().format("HH:mm"));

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="grid items-center gap-1.5">
            <Label htmlFor="time">Time</Label>
            <TimeInput
                id="time"
                value={value}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default TimeInputWithLabelDemo;
