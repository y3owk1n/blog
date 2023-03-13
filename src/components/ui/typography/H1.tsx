import { twMerge } from "tailwind-merge";

const H1 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1
            {...props}
            className={twMerge(
                "font-serif text-4xl font-bold tracking-tight",
                className
            )}
        />
    );
};

export { H1 };
