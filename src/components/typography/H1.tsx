import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const H1 = ({ children }: Props) => {
    return (
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    );
};

export { H1 };
