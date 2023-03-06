"use client";

import React from "react";

import { Input } from "@/components/ui/Input";

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
