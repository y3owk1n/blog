"use client";

import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";
import React from "react";

const CheckboxDemo = () => {
    return (
        <div className="space-y-2">
            <div className="flex gap-4">
                <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="terms1">
                            Accept terms and conditions
                        </Label>
                        <p className="text-sm text-slate-500">
                            You agree to our Terms of Service and Privacy
                            Policy.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox
                    id="terms2"
                    disabled
                />
                <Label htmlFor="terms2">Accept terms and conditions</Label>
            </div>
        </div>
    );
};

export default CheckboxDemo;
