import type { ReactNode } from "react";
import React from "react";

interface Props {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            {children}
        </div>
    );
};

export default Container;