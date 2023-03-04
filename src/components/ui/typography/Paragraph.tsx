import { classNames } from "@/lib/classNames";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    variant?: "normal" | "lead" | "large" | "small" | "subtle";
    className?: string;
}

const Paragraph = ({ children, variant = "normal", className = "" }: Props) => {
    const isNormal = variant === "normal";
    const isLead = variant === "lead";
    const isLarge = variant === "large";
    const isSmall = variant === "small";
    const isSubtle = variant === "subtle";

    return (
        <p
            className={classNames(
                isNormal && "leading-7",
                isLead && "text-xl text-slate-700",
                isLarge && "text-lg font-semibold text-slate-900",
                isSmall && "text-sm font-medium leading-none",
                isSubtle && "text-sm text-slate-500",
                className
            )}>
            {children}
        </p>
    );
};

export { Paragraph };
