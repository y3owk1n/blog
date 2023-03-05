"use client";

import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import React from "react";

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
