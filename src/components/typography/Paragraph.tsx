import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Paragraph = ({ children }: Props) => {
    return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export default Paragraph;
