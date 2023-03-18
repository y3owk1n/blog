"use client";

import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonGroupProps {
    children: ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return (
        <div
            className={twMerge(
                "flex w-full max-w-fit flex-row flex-wrap",
                "[&>*:first-child]:rounded-none [&>*:first-child]:rounded-l-md",
                "[&>*:last-child]:rounded-none [&>*:last-child]:rounded-r-md",
                "[&>*:not(:first-child):not(:last-child)]:rounded-none",
                "[&>*:only-child]:rounded-md"
            )}>
            {children}
        </div>
    );
};

export { ButtonGroup };
