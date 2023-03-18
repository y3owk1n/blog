"use client";

import React, { useState } from "react";

import { useHotkeys } from "@/lib/hooks/useHotkeys";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/Command";
import { Kbd } from "@/components/ui/Kbd";
import { Paragraph } from "@/components/ui/typography/Paragraph";

const CommandDialogDemo = () => {
    const [open, setOpen] = useState(false);

    useHotkeys([["mod+J", () => setOpen((open) => !open)]]);

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
