"use client";

import * as React from "react";

import { classNames } from "@/lib/classNames";
import { CodeBlockWrapper } from "./CodeBlockWrapper";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
}

export function ComponentSource({ children, className }: ComponentSourceProps) {
    return (
        <CodeBlockWrapper
            expandButtonTitle="View Primitive"
            className={classNames(
                "my-6 overflow-hidden rounded-md",
                className
            )}>
            {children}
        </CodeBlockWrapper>
    );
}
