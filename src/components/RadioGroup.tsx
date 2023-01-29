"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { classNames } from "@/lib/classNames";

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={classNames("grid gap-2", className)}
            {...props}
            ref={ref}
        />
    );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={classNames(
                "text:fill-slate-50 h-4 w-4 rounded-full border border-slate-300 text-slate-900 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}>
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
