"use client";

import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import React from "react";

const TextareaDemo = () => {
    return (
        <div className="space-y-4">
            <Textarea placeholder="Type your message here." />
            <Textarea
                placeholder="Type your message here."
                disabled
            />
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                    placeholder="Type your message here."
                    id="message"
                />
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">Your Message</Label>
                <Textarea
                    placeholder="Type your message here."
                    id="message-2"
                />
                <p className="text-sm text-slate-500">
                    Your message will be copied to the support team.
                </p>
            </div>
            <div className="grid w-full gap-2">
                <Textarea placeholder="Type your message here." />
                <Button>Send message</Button>
            </div>
        </div>
    );
};

export default TextareaDemo;
