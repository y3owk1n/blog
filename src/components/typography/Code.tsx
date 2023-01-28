import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Code = ({ children }: Props) => {
    return (
        <code className="relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900">
            {children}
        </code>
    );
};

export default Code;
