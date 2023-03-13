import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "normal" | "lead" | "large" | "small" | "subtle";
}

const Paragraph = ({ variant = "normal", className, ...props }: Props) => {
    const isNormal = variant === "normal";
    const isLead = variant === "lead";
    const isLarge = variant === "large";
    const isSmall = variant === "small";
    const isSubtle = variant === "subtle";

    return (
        <p
            {...props}
            className={twMerge(
                isNormal && "leading-7",
                isLead && "text-xl text-slate-700",
                isLarge && "text-lg font-semibold text-slate-900",
                isSmall && "text-sm font-medium leading-none",
                isSubtle && "text-sm text-slate-500",
                className
            )}
        />
    );
};

export { Paragraph };
