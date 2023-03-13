import { twMerge } from "tailwind-merge";

const H3 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h3
            {...props}
            className={twMerge(
                "font-serif text-2xl font-semibold tracking-tight",
                className
            )}
        />
    );
};

export { H3 };
