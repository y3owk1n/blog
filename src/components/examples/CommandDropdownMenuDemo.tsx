"use client";

import * as React from "react";
import {
    AdjustmentsVerticalIcon,
    CalendarIcon,
    TagIcon,
    TrashIcon,
    UserIcon,
} from "@heroicons/react/20/solid";

import { Button } from "@/components/ui/Button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/Command";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
];

const CommandDropdownMenuDemo = () => {
    const [label, setLabel] = React.useState("feature");
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border border-slate-200 py-3 px-4 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-slate-900 px-2 py-1 text-xs text-slate-50 ">
                    {label}
                </span>
                <span className="text-slate-500">Create a new project</span>
            </p>
            <DropdownMenu
                open={open}
                onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm">
                        <AdjustmentsVerticalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="w-[200px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <UserIcon className="mr-2 h-4 w-4" />
                            Assign to...
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            Set due date...
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <TagIcon className="mr-2 h-4 w-4" />
                                Apply label
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Filter label..."
                                        autoFocus={true}
                                    />
                                    <CommandList>
                                        <CommandEmpty>
                                            No label found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {labels.map((label) => (
                                                <CommandItem
                                                    key={label}
                                                    onSelect={(value) => {
                                                        setLabel(value);
                                                        setOpen(false);
                                                    }}>
                                                    {label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <TrashIcon className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default CommandDropdownMenuDemo;
