import { classNames } from "@/lib/classNames";

const H4 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h4
            {...props}
            className={classNames(
                className,
                "font-serif text-xl font-semibold tracking-tight"
            )}
        />
    );
};

export { H4 };
