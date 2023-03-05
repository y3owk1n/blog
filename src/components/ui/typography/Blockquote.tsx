import { classNames } from "@/lib/classNames";
import React from "react";

const Blockquote = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <blockquote
            {...props}
            className={classNames(
                "border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-500",
                "dark:border-slate-300 dark:text-slate-800 dark:[&>*]:text-slate-300",
                className
            )}
        />
    );
};

export { Blockquote };
