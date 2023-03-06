"use client";

import React from "react";

import { Textarea } from "@/components/ui/Textarea";

const TextareaDisabledDemo = () => {
    return (
        <Textarea
            placeholder="Type your message here."
            disabled
        />
    );
};

export default TextareaDisabledDemo;
