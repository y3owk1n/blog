import { twMerge } from "tailwind-merge";

const LinkTag = ({
    className,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            {...props}
            className={twMerge(
                "font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50",
                className
            )}
        />
    );
};

export { LinkTag };
