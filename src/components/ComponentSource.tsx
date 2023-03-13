"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

import { CodeBlockWrapper } from "./CodeBlockWrapper";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
}

export function ComponentSource({ children, className }: ComponentSourceProps) {
    return (
        <CodeBlockWrapper
            expandButtonTitle="View Primitive"
            className={twMerge("my-6 overflow-hidden rounded-md", className)}>
            {children}
        </CodeBlockWrapper>
    );
}
