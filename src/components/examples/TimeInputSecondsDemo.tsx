"use client";

import React, { useState } from "react";
import dayjs from "dayjs";

import { TimeInput } from "@/components/ui/TimeInput";

const TimeInputSecondsDemo = () => {
    const [value, setValue] = useState<string>(dayjs().format("HH:mm:ss"));

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <TimeInput
            withSeconds
            value={value}
            onChange={handleValueChange}
        />
    );
};

export default TimeInputSecondsDemo;
