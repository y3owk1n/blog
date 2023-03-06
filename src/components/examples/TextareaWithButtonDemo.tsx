"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";

const TextareaWithButtonDemo = () => {
    return (
        <div className="grid gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
        </div>
    );
};

export default TextareaWithButtonDemo;
