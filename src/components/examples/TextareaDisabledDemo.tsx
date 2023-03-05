"use client";

import { Textarea } from "@/components/ui/Textarea";
import React from "react";

const TextareaDisabledDemo = () => {
    return (
        <Textarea
            placeholder="Type your message here."
            disabled
        />
    );
};

export default TextareaDisabledDemo;
