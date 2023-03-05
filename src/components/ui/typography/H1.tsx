import { classNames } from "@/lib/classNames";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const H1 = ({ children, className }: Props) => {
    return (
        <h1
            className={classNames(
                className,
                "text-4xl font-extrabold tracking-tight lg:text-5xl"
            )}>
            {children}
        </h1>
    );
};

export { H1 };
