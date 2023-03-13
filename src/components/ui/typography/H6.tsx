import { twMerge } from "tailwind-merge";

const H6 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h6
            {...props}
            className={twMerge(
                "font-serif text-base font-semibold tracking-tight",
                className
            )}
        />
    );
};

export { H6 };
