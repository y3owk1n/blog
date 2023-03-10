import { twMerge } from "tailwind-merge";

import { Separator } from "./ui/Separator";
import { H1 } from "./ui/typography/H1";
import { Paragraph } from "./ui/typography/Paragraph";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    text?: string;
}

export function PageHeader({
    heading,
    text,
    className,
    children,
    ...props
}: PageHeaderProps) {
    return (
        <>
            <div
                className={twMerge("space-y-4", className)}
                {...props}>
                <H1 className="font-serif">{heading}</H1>
                {text && <Paragraph>{text}</Paragraph>}
            </div>
            {children}
            <Separator className="my-4 md:my-6" />
        </>
    );
}
