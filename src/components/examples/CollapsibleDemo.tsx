"use client";

import { Button } from "@/components/ui/Button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";

const CollapsibleDemo = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger
                    asChild
                    className="[&[data-state=open]>svg]:rotate-180">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-9 p-0">
                        <ChevronUpIcon className="h-4 w-4 transition-transform duration-200" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm ">
                @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm ">
                    @radix-ui/colors
                </div>
                <div className="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm ">
                    @stitches/react
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default CollapsibleDemo;
