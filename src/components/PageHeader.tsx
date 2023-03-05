import { classNames } from "@/lib/classNames";
import { Separator } from "./ui/Separator";

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
                className={classNames("space-y-4", className)}
                {...props}>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {heading}
                </h1>
                {text && (
                    <p className="max-w-[95%] text-xl text-slate-700 ">
                        {text}
                    </p>
                )}
            </div>
            {children}
            <Separator className="my-4 md:my-6" />
        </>
    );
}
