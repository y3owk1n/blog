import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H3 = ({ children }: Props) => {
    return (
        <h3 className="text-2xl font-semibold tracking-tight">{children}</h3>
    );
};

export { H3 };
