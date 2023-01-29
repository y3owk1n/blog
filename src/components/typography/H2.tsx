import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H2 = ({ children }: Props) => {
    return (
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
            {children}
        </h2>
    );
};

export { H2 };
