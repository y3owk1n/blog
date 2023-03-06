"use client";

import React from "react";

import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";

const TextareaWithHelperDemo = () => {
    return (
        <div className="grid gap-1.5">
            <Label htmlFor="message-2">Your Message</Label>
            <Textarea
                placeholder="Type your message here."
                id="message-2"
            />
            <p className="text-sm text-slate-500">
                Your message will be copied to the support team.
            </p>
        </div>
    );
};

export default TextareaWithHelperDemo;
