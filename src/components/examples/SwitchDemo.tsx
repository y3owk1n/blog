"use client";

import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";
import React from "react";

const SwitchDemo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    );
};

export default SwitchDemo;
