import { classNames } from "@/lib/classNames";

const H6 = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h6
            {...props}
            className={classNames(
                className,
                "font-serif text-base font-semibold tracking-tight"
            )}
        />
    );
};

export { H6 };
