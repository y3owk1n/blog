"use client";

import React, { useEffect, useState } from "react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/Command";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { Kbd } from "../ui/Kbd";

const CommandDialogDemo = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && e.metaKey) {
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <Paragraph className="flex items-center">
                Use
                <Kbd
                    variant="outline"
                    className="mx-2">
                    ⌘
                </Kbd>
                +
                <Kbd
                    variant="outline"
                    className="mx-2">
                    J
                </Kbd>
                to summon command
            </Paragraph>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default CommandDialogDemo;
