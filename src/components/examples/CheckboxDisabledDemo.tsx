"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";
import React from "react";

const CheckboxDisabledDemo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                id="terms2"
                disabled
            />
            <Label htmlFor="terms2">Accept terms and conditions</Label>
        </div>
    );
};

export default CheckboxDisabledDemo;
