import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H3 = ({ children }: Props) => {
    return (
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    );
};

export { H3 };
