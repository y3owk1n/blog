import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    icon?: string;
}

const alertVariants = cva("flex items-start rounded-md  p-4", {
    variants: {
        variant: {
            default:
                "bg-slate-700 text-slate-100 dark:bg-slate-300 dark:text-slate-700",
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
            className={twMerge(alertVariants({ variant, className }))}
            {...props}>
            {icon && <span className="mr-4 text-2xl">{icon}</span>}
            <div>{children}</div>
        </div>
    );
}

export { Alert };
