import { twMerge } from "tailwind-merge";

const H5 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h5
            {...props}
            className={twMerge(
                "font-serif text-lg font-semibold tracking-tight",
                className
            )}
        />
    );
};

export { H5 };
