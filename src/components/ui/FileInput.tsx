import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { classNames } from "@/lib/classNames";

export interface FileInputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof fileInputVariont> {}

const fileInputVariont = cva(
    "text-slate-500 file:transition-colors disabled:cursor-not-allowed disabled:opacity-50 file:disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                default: classNames(
                    "file:border-0 file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-600 hover:file:disabled:bg-slate-800",
                    "dark:file:bg-slate-50 dark:file:text-slate-700 dark:hover:file:bg-slate-100 dark:hover:file:disabled:bg-slate-50"
                ),
                outline: classNames(
                    "file:border file:border-slate-800 file:bg-transparent file:text-slate-800 hover:file:border-slate-600 hover:file:bg-slate-50 hover:file:text-slate-600 hover:file:disabled:border-slate-800 hover:file:disabled:bg-transparent hover:file:disabled:text-slate-800",
                    "dark:file:border-slate-200 dark:file:text-slate-100 dark:hover:file:border-slate-700 dark:hover:file:bg-slate-100 dark:hover:file:text-slate-800  dark:hover:file:disabled:border-slate-200 dark:hover:file:disabled:bg-transparent dark:hover:file:disabled:text-slate-100"
                ),
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <input
                className={classNames(
                    "block w-full text-sm ",
                    "file:mr-4 file:cursor-pointer file:rounded file:py-2 file:px-4 file:text-sm file:font-semibold ",
                    fileInputVariont({ variant, className })
                )}
                ref={ref}
                type="file"
                {...props}
            />
        );
    }
);
FileInput.displayName = "File Input";

export { FileInput };
