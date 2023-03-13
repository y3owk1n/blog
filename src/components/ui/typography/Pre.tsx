import React from "react";
import { twMerge } from "tailwind-merge";

const Pre = ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
        <pre
            {...props}
            className={twMerge(
                "overflow-x-auto rounded-lg border border-slate-900 bg-slate-900 py-4 px-2 dark:border-slate-700 dark:bg-black",
                className
            )}
        />
    );
};

export { Pre };
