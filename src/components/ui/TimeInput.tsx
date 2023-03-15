import * as React from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    withSeconds?: boolean;
};

const TimeInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, withSeconds = false, ...props }, ref) => {
        return (
            <input
                className={twMerge(
                    "flex h-10 rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    "dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
                    className
                )}
                ref={ref}
                type="time"
                step={withSeconds ? 1 : 60}
                {...props}
            />
        );
    }
);
TimeInput.displayName = "TimeInput";

export { TimeInput };
