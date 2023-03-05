import { classNames } from "@/lib/classNames";

const H2 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h2
            {...props}
            className={classNames(
                className,
                "font-serif text-3xl font-semibold tracking-tight"
            )}
        />
    );
};

export { H2 };
