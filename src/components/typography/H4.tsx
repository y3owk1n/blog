import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H4 = ({ children }: Props) => {
    return <h4 className="text-xl font-semibold tracking-tight">{children}</h4>;
};

export { H4 };
