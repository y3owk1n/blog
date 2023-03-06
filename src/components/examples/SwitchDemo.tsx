"use client";

import React from "react";

import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";

const SwitchDemo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    );
};

export default SwitchDemo;
