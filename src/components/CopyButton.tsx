"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/20/solid";
import type { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

import type { NpmCommands } from "@/types/unist-builder";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    value: string;
    src?: string;
}

async function copyToClipboardWithMeta(
    value: string,
    meta?: Record<string, unknown>
) {
    await navigator.clipboard.writeText(value);
    return;
}

export function CopyButton({
    value,
    className,
    src,
    ...props
}: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    const handleClick = async () => {
        await copyToClipboardWithMeta(value, {
            component: src,
        });
        setHasCopied(true);
    };

    return (
        <button
            className={twMerge(
                "z-20 inline-flex h-8 items-center justify-center rounded-md border border-slate-300 p-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-50 focus:outline-none dark:border-slate-600 dark:text-slate-600 ",
                className
            )}
            onClick={() => void handleClick()}
            {...props}>
            <span className="sr-only">Copy</span>
            {hasCopied ? (
                <CheckIcon className="h-4 w-4" />
            ) : (
                <ClipboardIcon className="h-4 w-4" />
            )}
        </button>
    );
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
    value: string;
    classNames: string;
    className: string;
}

export function CopyWithClassNames({
    value,
    classNames,
    className,
    ...props
}: CopyWithClassNamesProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    const copyToClipboard = React.useCallback(async (value: string) => {
        await copyToClipboardWithMeta(value);
        setHasCopied(true);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={twMerge(
                    "relative z-20 inline-flex h-8 items-center justify-center rounded-md p-2 text-sm font-medium text-slate-900 transition-all hover:bg-slate-100 focus:outline-none ",
                    className
                )}
                {...props}>
                {hasCopied ? (
                    <CheckIcon className="h-4 w-4" />
                ) : (
                    <ClipboardIcon className="h-4 w-4" />
                )}
                <span className="sr-only">Copy</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => void copyToClipboard(value)}>
                    {/* <Icons.react className="mr-2 h-4 w-4" /> */}
                    <span>Component</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => void copyToClipboard(classNames)}>
                    {/* <Icons.tailwind className="mr-2 h-4 w-4" /> */}
                    <span>Classname</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
    commands: Required<NpmCommands>;
}

export function CopyNpmCommandButton({
    commands,
    className,
    ...props
}: CopyNpmCommandButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    const copyCommand = React.useCallback(async (value: string) => {
        await copyToClipboardWithMeta(value);
        setHasCopied(true);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={twMerge(
                    " z-20 inline-flex h-8 items-center justify-center rounded-md p-2 text-sm font-medium text-slate-100 transition-all hover:bg-slate-100 focus:outline-none",
                    className
                )}
                {...props}>
                {hasCopied ? (
                    <CheckIcon className="h-4 w-4" />
                ) : (
                    <ClipboardIcon className="h-4 w-4" />
                )}
                <span className="sr-only">Copy</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => void copyCommand(commands.__npmCommand__)}>
                    {/* <Icons.npm className="mr-2 h-4 w-4 fill-[#CB3837]" /> */}
                    <span>npm</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => void copyCommand(commands.__yarnCommand__)}>
                    {/* <Icons.yarn className="mr-2 h-4 w-4 fill-[#2C8EBB]" /> */}
                    <span>yarn</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => void copyCommand(commands.__pnpmCommand__)}>
                    {/* <Icons.pnpm className="mr-2 h-4 w-4 fill-[#F69220]" /> */}
                    <span>pnpm</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
