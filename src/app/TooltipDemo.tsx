"use client";

import { Button } from "@/components/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

const TooltipDemo = () => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="w-10 rounded-full p-0">
                    <PlusIcon className="h-4 w-4" />
                    <span className="sr-only">Add</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default TooltipDemo;
