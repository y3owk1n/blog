"use client";

import * as React from "react";
import { useState } from "react";
import {
    CheckIcon,
    FolderIcon,
    FunnelIcon,
    PlusCircleIcon,
    XMarkIcon,
} from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

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
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/Popover";

type Status = {
    value: string;
    label: string;
    icon: typeof FolderIcon;
};

const statuses: Status[] = [
    {
        value: "backlog",
        label: "Backlog",
        icon: FolderIcon,
    },
    {
        value: "todo",
        label: "Todo",
        icon: PlusCircleIcon,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: FunnelIcon,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckIcon,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: XMarkIcon,
    },
];

const CommandPopoverDemo = () => {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

    return (
        <div className="flex items-center space-x-4">
            <p className="text-sm text-slate-500 ">Status</p>
            <Popover
                open={open}
                onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-[120px] justify-start">
                        {selectedStatus ? (
                            <>
                                <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                                {selectedStatus.label}
                            </>
                        ) : (
                            <>+ Set status</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="p-0"
                    side="right"
                    align="start">
                    <Command>
                        <CommandInput placeholder="Change status..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        onSelect={(value) => {
                                            setSelectedStatus(
                                                statuses.find(
                                                    (priority) =>
                                                        priority.value === value
                                                ) || null
                                            );
                                            setOpen(false);
                                        }}>
                                        <status.icon
                                            className={twMerge(
                                                "mr-2 h-4 w-4",
                                                status.value ===
                                                    selectedStatus?.value
                                                    ? "opacity-100"
                                                    : "opacity-40"
                                            )}
                                        />
                                        <span>{status.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default CommandPopoverDemo;
