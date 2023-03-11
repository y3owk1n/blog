"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
    CircleStackIcon,
    FolderIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/20/solid";
import type { DialogProps } from "@radix-ui/react-alert-dialog";
import { useTheme } from "next-themes";
import { TbDeviceLaptop, TbFileInfo } from "react-icons/tb";

import { classNames } from "@/lib/classNames";
import { allPostsAndSort, groupUisByTags } from "@/lib/contentlayerApi";
import { Button } from "./ui/Button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./ui/Command";

export function CommandMenu({ ...props }: DialogProps) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const { setTheme } = useTheme();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <Button
                variant="outline"
                className={classNames(
                    "relative h-9 w-full justify-start text-sm text-slate-500 dark:text-slate-400 sm:pr-12 md:w-40 lg:w-64"
                )}
                onClick={() => setOpen(true)}
                {...props}>
                <span className="hidden lg:inline-flex">
                    Search something...
                </span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute top-2 right-1.5 hidden h-5 select-none items-center gap-1 rounded border border-slate-100 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Posts">
                        {allPostsAndSort.map((navItem) => (
                            <CommandItem
                                key={navItem.href}
                                onSelect={() => {
                                    runCommand(() => router.push(navItem.href));
                                }}>
                                <TbFileInfo className="mr-2 h-4 w-4" />
                                {navItem.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>

                    {groupUisByTags.map((navItem) => (
                        <CommandGroup
                            key={navItem.title}
                            heading={navItem.title}>
                            {navItem.items.map((subItem) => (
                                <CommandItem
                                    key={subItem.href}
                                    onSelect={() => {
                                        runCommand(() =>
                                            router.push(subItem.href)
                                        );
                                    }}>
                                    <TbFileInfo className="mr-2 h-4 w-4" />
                                    {subItem.title}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                    <CommandSeparator className="mb-4" />
                    <CommandGroup heading="Theme">
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => setTheme("light"))
                            }>
                            <SunIcon className="mr-2 h-4 w-4" />
                            Light
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => setTheme("dark"))}>
                            <MoonIcon className="mr-2 h-4 w-4" />
                            Dark
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => setTheme("system"))
                            }>
                            <TbDeviceLaptop className="mr-2 h-4 w-4" />
                            System
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
