import { classNames } from "@/lib/classNames";

const H5 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h5
            {...props}
            className={classNames(
                className,
                "font-serif text-lg font-semibold tracking-tight"
            )}
        />
    );
};

export { H5 };
