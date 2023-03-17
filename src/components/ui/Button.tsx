"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
    "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
    {
        variants: {
            variant: {
                default:
                    "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
                outline:
                    "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
                subtle: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
                ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
                link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-2 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 p-2",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            children,
            variant,
            size,
            leftIcon,
            rightIcon,
            loading = false,
            ...props
        },
        ref
    ) => {
        return (
            <button
                className={twMerge(
                    buttonVariants({ variant, size, className })
                )}
                disabled={loading || props.disabled}
                ref={ref}
                {...props}>
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                {loading && (
                    <span className="mr-2 block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent " />
                )}
                {children}
                {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
