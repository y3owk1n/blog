import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Blockquote({ children }: Props) {
    return (
        <blockquote className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800">
            {children}
        </blockquote>
    );
}
