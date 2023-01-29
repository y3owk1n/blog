import { classNames } from "@/lib/classNames";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    variant?: "normal" | "lead" | "large" | "small" | "subtle";
}

const Paragraph = ({ children, variant = "normal" }: Props) => {
    const isNormal = variant === "normal";
    const isLead = variant === "lead";
    const isLarge = variant === "large";
    const isSmall = variant === "small";
    const isSubtle = variant === "subtle";

    return (
        <p
            className={classNames(
                isNormal && "leading-7 [&:not(:first-child)]:mt-6",
                isLead && "text-xl text-slate-700",
                isLarge && "text-lg font-semibold text-slate-900",
                isSmall && "text-sm font-medium leading-none",
                isSubtle && "text-sm text-slate-500"
            )}>
            {children}
        </p>
    );
};

export { Paragraph };
