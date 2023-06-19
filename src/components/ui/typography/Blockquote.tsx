import React from "react";
import { twMerge } from "tailwind-merge";

const Blockquote = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <blockquote
            {...props}
            className={twMerge("mt-6 border-l-2 pl-6 italic", className)}
        />
    );
};

export { Blockquote };
