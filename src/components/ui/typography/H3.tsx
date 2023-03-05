import { classNames } from "@/lib/classNames";

const H3 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h3
            {...props}
            className={classNames(
                className,
                "font-serif text-2xl font-semibold tracking-tight"
            )}
        />
    );
};

export { H3 };
