import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    icon?: ReactNode;
}

const badgeVariants = cva("text-xs flex space-x-2 w-fit rounded-md px-2 py-1", {
    variants: {
        variant: {
            default:
                "bg-slate-700 text-slate-100 dark:bg-slate-300 dark:text-slate-700",
            outline:
                "bg-transparent border border-slate-200  dark:border-slate-700 dark:text-slate-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

function Badge({ children, variant, className, icon, ...props }: BadgeProps) {
    return (
        <div
            className={twMerge(badgeVariants({ variant, className }))}
            {...props}>
            {icon && icon}
            <div>{children}</div>
        </div>
    );
}

export { Badge };
