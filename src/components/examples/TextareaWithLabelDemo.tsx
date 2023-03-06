"use client";

import React from "react";

import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";

const TextareaWithLabelDemo = () => {
    return (
        <div className="grid gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea
                placeholder="Type your message here."
                id="message"
            />
        </div>
    );
};

export default TextareaWithLabelDemo;
