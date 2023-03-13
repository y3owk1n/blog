"use client";

import * as React from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/Button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/Command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/Popover";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

const CommandComboBoxDemo = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between">
                    {value
                        ? frameworks.find(
                              (framework) => framework.value === value
                          )?.label
                        : "Select framework..."}
                    <ChevronUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(
                                        currentValue === value
                                            ? ""
                                            : currentValue
                                    );
                                    setOpen(false);
                                }}>
                                <CheckIcon
                                    className={twMerge(
                                        "mr-2 h-4 w-4",
                                        value === framework.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {framework.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default CommandComboBoxDemo;
