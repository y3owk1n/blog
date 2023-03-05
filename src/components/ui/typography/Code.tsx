import { classNames } from "@/lib/classNames";
import React from "react";

const Code = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
        <code
            {...props}
            className={classNames(
                "relative rounded bg-slate-900 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-200 dark:bg-black dark:text-slate-400",
                className
            )}
        />
    );
};

export { Code };
