import { classNames } from "@/lib/classNames";

const H1 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1
            {...props}
            className={classNames(
                className,
                "font-serif text-4xl font-bold tracking-tight"
            )}
        />
    );
};

export { H1 };
