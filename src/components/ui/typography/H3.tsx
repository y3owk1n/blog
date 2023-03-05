import { classNames } from "@/lib/classNames";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const H3 = ({ children, className }: Props) => {
    return (
        <h3
            className={classNames(
                className,
                "text-2xl font-semibold tracking-tight"
            )}>
            {children}
        </h3>
    );
};

export { H3 };
