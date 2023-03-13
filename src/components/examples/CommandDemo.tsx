"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { TbDeviceLaptop, TbFileInfo } from "react-icons/tb";

import { allPostsAndSort, groupUisByTags } from "@/lib/contentlayerApi";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/Command";

const CommandDemo = () => {
    const router = useRouter();

    const { setTheme } = useTheme();

    const runCommand = React.useCallback((command: () => unknown) => {
        command();
    }, []);

    return (
        <Command
            label="Command Menu"
            className="drop-shadow-md">
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
                                    runCommand(() => router.push(subItem.href));
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
                        onSelect={() => runCommand(() => setTheme("light"))}>
                        <SunIcon className="mr-2 h-4 w-4" />
                        Light
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => setTheme("dark"))}>
                        <MoonIcon className="mr-2 h-4 w-4" />
                        Dark
                    </CommandItem>
                    <CommandItem
                        onSelect={() => runCommand(() => setTheme("system"))}>
                        <TbDeviceLaptop className="mr-2 h-4 w-4" />
                        System
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
};

export default CommandDemo;
