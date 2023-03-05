"use client";

import { Input } from "@/components/ui/Input";
import React from "react";
import { Label } from "../ui/Label";

const InputWithHelperDemo = () => {
    return (
        <div className="grid  items-center gap-1.5">
            <Label htmlFor="email-2">Email</Label>
            <Input
                type="email"
                id="email-2"
                placeholder="Email"
            />
            <p className="text-sm text-slate-500">Enter your email address.</p>
        </div>
    );
};

export default InputWithHelperDemo;
