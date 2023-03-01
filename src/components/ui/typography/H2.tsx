import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H2 = ({ children }: Props) => {
    return (
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
            {children}
        </h2>
    );
};

export { H2 };
