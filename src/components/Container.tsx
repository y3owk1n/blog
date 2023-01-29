import { classNames } from "@/lib/classNames";
import type { ReactNode } from "react";
import React from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className = "" }: Props) => {
    return (
        <div
            className={classNames(
                "mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:max-w-7xl lg:px-8",
                className
            )}>
            {children}
        </div>
    );
};

export { Container };
