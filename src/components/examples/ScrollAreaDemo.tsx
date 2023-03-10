"use client";

import React from "react";

import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const ScrollAreaDemo = () => {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border border-slate-100 dark:border-slate-800">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                    <div key={tag}>
                        <div
                            className="text-sm"
                            key={tag}>
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
};

export default ScrollAreaDemo;
