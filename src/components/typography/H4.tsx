import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H4 = ({ children }: Props) => {
    return (
        <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    );
};

export default H4;
