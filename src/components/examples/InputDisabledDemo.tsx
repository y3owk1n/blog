"use client";

import { Input } from "@/components/ui/Input";
import React from "react";

const InputDisabledDemo = () => {
    return (
        <Input
            disabled
            type="email"
            placeholder="Email"
        />
    );
};

export default InputDisabledDemo;
