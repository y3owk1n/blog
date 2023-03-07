import { cva, type VariantProps } from "class-variance-authority";

import { classNames } from "@/lib/classNames";

interface KbdProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof kbdVariants> {
    modifier?: string;
}

const kbdVariants = cva(
    "pointer-events-none w-fit flex h-5 select-none items-center gap-1 rounded border  px-1.5 font-mono text-xs font-medium opacity-100",
    {
        variants: {
            variant: {
                default:
                    "bg-slate-700 text-slate-100 dark:bg-slate-300 dark:text-slate-700",
                outline:
                    "border-slate-100 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

function Kbd({ children, variant, className, modifier, ...props }: KbdProps) {
    return (
        <kbd
            className={classNames(kbdVariants({ variant, className }))}
            {...props}>
            {modifier && <span className="text-xs">{modifier}</span>}
            {children}
        </kbd>
    );
}

export { Kbd };
