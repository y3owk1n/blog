import { twMerge } from "tailwind-merge";

const H2 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h2
            {...props}
            className={twMerge(
                "font-serif text-3xl font-semibold tracking-tight",
                className
            )}
        />
    );
};

export { H2 };
