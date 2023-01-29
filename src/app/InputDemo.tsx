"use client"

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import React from "react";

const InputDemo = () => {
    return (
        <div className="space-y-4">
            <Input
                type="email"
                placeholder="Email"
            />
            <Input
                disabled
                type="email"
                placeholder="Email"
            />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email-2">Email</Label>
                <Input
                    type="email"
                    id="email-2"
                    placeholder="Email"
                />
                <p className="text-sm text-slate-500">
                    Enter your email address.
                </p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="email"
                    placeholder="Email"
                />
                <Button type="submit">Subscribe</Button>
            </div>
        </div>
    );
};

export default InputDemo;
