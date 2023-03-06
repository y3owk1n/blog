"use client";

import React from "react";

import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";

const CheckboxDemo = () => {
    return (
        <div className="flex gap-4">
            <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms1">Accept terms and conditions</Label>
                    <p className="text-sm text-slate-500">
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CheckboxDemo;
