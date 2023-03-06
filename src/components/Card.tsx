import Link from "next/link";

import { classNames } from "@/lib/classNames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
    disabled?: boolean;
}

export function Card({
    href,
    className,
    children,
    disabled,
    ...props
}: CardProps) {
    return (
        <div
            className={classNames(
                "group relative rounded-lg border border-slate-200 bg-transparent p-6 text-slate-900 shadow-md transition-shadow hover:shadow-lg ",
                disabled && "cursor-not-allowed opacity-60",
                className
            )}
            {...props}>
            <div className="flex flex-col justify-between space-y-4">
                <div className="[&>p]: space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-slate-600">
                    {children}
                </div>
            </div>
            {href && (
                <Link
                    href={disabled ? "#" : href}
                    className="absolute inset-0">
                    <span className="sr-only">View</span>
                </Link>
            )}
        </div>
    );
}
