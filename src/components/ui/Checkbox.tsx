"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { classNames } from "@/lib/classNames";
import { CheckIcon } from "@heroicons/react/20/solid";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={classNames(
            "peer h-4 w-4 shrink-0 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}>
        <CheckboxPrimitive.Indicator
            className={classNames("flex items-center justify-center")}>
            <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
