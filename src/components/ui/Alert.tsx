import { cva, type VariantProps } from "class-variance-authority";

import { classNames } from "@/lib/classNames";

interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    icon?: string;
}

const alertVariants = cva("flex items-start rounded-md  p-4", {
    variants: {
        variant: {
            default:
                "bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900",
            destructive: "bg-red-500 text-white ",
            outline:
                "bg-transparent border border-slate-200  dark:border-slate-700 dark:text-slate-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

function Alert({ children, variant, className, icon, ...props }: AlertProps) {
    return (
        <div
            className={classNames(alertVariants({ variant, className }))}
            {...props}>
            {icon && <span className="mr-4 text-2xl">{icon}</span>}
            <div>{children}</div>
        </div>
    );
}

export { Alert };
