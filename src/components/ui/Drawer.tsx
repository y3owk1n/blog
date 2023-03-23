"use client";

import * as React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const portalVariants = cva("fixed inset-0 z-50 flex", {
    variants: {
        position: {
            top: "items-start",
            bottom: "items-end",
            left: "justify-start",
            right: "justify-end",
        },
    },
    defaultVariants: { position: "right" },
});

interface DrawerPortalProps
    extends DrawerPrimitive.DialogPortalProps,
        VariantProps<typeof portalVariants> {}

const DrawerPortal = ({
    position,
    className,
    children,
    ...props
}: DrawerPortalProps) => (
    <DrawerPrimitive.Portal
        className={twMerge(className)}
        {...props}>
        <div className={portalVariants({ position })}>{children}</div>
    </DrawerPrimitive.Portal>
);
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
        className={twMerge(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
            className
        )}
        {...props}
        ref={ref}
    />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
    "fixed z-50 scale-100 gap-4 bg-white p-6 opacity-100 dark:bg-slate-900",
    {
        variants: {
            position: {
                top: "animate-in slide-in-from-top w-full duration-300",
                bottom: "animate-in slide-in-from-bottom w-full duration-300",
                left: "animate-in slide-in-from-left h-full duration-300",
                right: "animate-in slide-in-from-right h-full duration-300",
            },
            size: {
                content: "",
                default: "",
                sm: "",
                lg: "",
                xl: "",
                full: "",
            },
        },
        compoundVariants: [
            {
                position: ["top", "bottom"],
                size: "content",
                class: "max-h-screen",
            },
            {
                position: ["top", "bottom"],
                size: "default",
                class: "h-1/3",
            },
            {
                position: ["top", "bottom"],
                size: "sm",
                class: "h-1/4",
            },
            {
                position: ["top", "bottom"],
                size: "lg",
                class: "h-1/2",
            },
            {
                position: ["top", "bottom"],
                size: "xl",
                class: "h-5/6",
            },
            {
                position: ["top", "bottom"],
                size: "full",
                class: "h-screen",
            },
            {
                position: ["right", "left"],
                size: "content",
                class: "max-w-screen",
            },
            {
                position: ["right", "left"],
                size: "default",
                class: "w-1/3",
            },
            {
                position: ["right", "left"],
                size: "sm",
                class: "w-1/4",
            },
            {
                position: ["right", "left"],
                size: "lg",
                class: "w-1/2",
            },
            {
                position: ["right", "left"],
                size: "xl",
                class: "w-5/6",
            },
            {
                position: ["right", "left"],
                size: "full",
                class: "w-screen",
            },
        ],
        defaultVariants: {
            position: "right",
            size: "default",
        },
    }
);

export interface DialogContentProps
    extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
        VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    DialogContentProps
>(({ position, size, className, children, ...props }, ref) => (
    <DrawerPortal position={position}>
        <DrawerOverlay />
        <DrawerPrimitive.Content
            ref={ref}
            className={twMerge(drawerVariants({ position, size }), className)}
            {...props}>
            {children}
            <DrawerPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800">
                <XMarkIcon className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DrawerPrimitive.Close>
        </DrawerPrimitive.Content>
    </DrawerPortal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={twMerge(
            "flex flex-col space-y-2 text-center sm:text-left",
            className
        )}
        {...props}
    />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={twMerge(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={twMerge(
            "text-lg font-semibold text-slate-900",

            "dark:text-slate-50",
            className
        )}
        {...props}
    />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Description
        ref={ref}
        className={twMerge(
            "text-sm text-slate-500",
            "dark:text-slate-400",
            className
        )}
        {...props}
    />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
};
