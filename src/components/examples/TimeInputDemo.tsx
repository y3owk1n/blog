"use client";

import React, { useState } from "react";
import dayjs from "dayjs";

import { TimeInput } from "@/components/ui/TimeInput";

const TimeInputDemo = () => {
    const [value, setValue] = useState<string>(dayjs().format("HH:mm"));

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <TimeInput
            value={value}
            onChange={handleValueChange}
        />
    );
};

export default TimeInputDemo;