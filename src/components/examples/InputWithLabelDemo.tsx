"use client";

import { Input } from "@/components/ui/Input";
import React from "react";
import { Label } from "../ui/Label";

const InputWithLabelDemo = () => {
    return (
        <div className="grid items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
                type="email"
                id="email"
                placeholder="Email"
            />
        </div>
    );
};

export default InputWithLabelDemo;
