import { twMerge } from "tailwind-merge";

const LinkTag = ({
    className,
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            {...props}
            className={twMerge("group")}>
            <span
                className={twMerge(
                    "font-medium text-foreground group-hover:underline group-hover:underline-offset-4",
                    className
                )}>
                {children}
            </span>
        </a>
    );
};

export { LinkTag };
