"use client";

import { ScrollArea } from "@/components/ScrollArea";
import { Separator } from "@/components/Separator";
import React from "react";

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const ScrollAreaDemo = () => {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border border-slate-100 dark:border-slate-700">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                    <>
                        <div
                            className="text-sm"
                            key={tag}>
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    );
};

export default ScrollAreaDemo;
