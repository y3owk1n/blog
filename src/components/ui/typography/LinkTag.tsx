import { classNames } from "@/lib/classNames";

const LinkTag = ({
    className,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            {...props}
            className={classNames(
                className,
                "font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
            )}
        />
    );
};

export { LinkTag };
