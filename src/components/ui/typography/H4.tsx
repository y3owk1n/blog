import { twMerge } from "tailwind-merge";

const H4 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h4
            {...props}
            className={twMerge(
                "font-serif text-xl font-semibold tracking-tight",
                className
            )}
        />
    );
};

export { H4 };
