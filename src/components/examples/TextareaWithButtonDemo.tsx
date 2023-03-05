"use client";

import { Textarea } from "@/components/ui/Textarea";
import React from "react";
import { Button } from "../ui/Button";

const TextareaWithButtonDemo = () => {
    return (
        <div className="grid gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
        </div>
    );
};

export default TextareaWithButtonDemo;
