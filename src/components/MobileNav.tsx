"use client";

import * as React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/Drawer";
import { Button } from "./ui/Button";
import { ScrollArea } from "./ui/ScrollArea";
import { SidebarNav } from "./SidebarNav";
import { useState } from "react";
import { allPostsAndSort, groupUisByTags } from "@/lib/contentlayerApi";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    const postsWithTitle = [
        {
            title: "Posts",
            items: allPostsAndSort.map((item) => ({
                title: item.title,
                href: item.href,
                items: [],
            })),
        },
    ];

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-base hover:bg-transparent focus:ring-0  focus:ring-offset-0 md:hidden">
                    {/* <Icons.logo className="mr-2 h-4 w-4" />{" "} */}
                    <p>Kyle</p>
                    <span className="font-bold">Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent
                position="left"
                size="full">
                <ScrollArea className="h-[calc(100vh-4vh)]">
                    <SidebarNav
                        items={postsWithTitle}
                        onClickCallback={() => setOpen(false)}
                    />
                    <SidebarNav
                        items={groupUisByTags}
                        onClickCallback={() => setOpen(false)}
                    />
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
}
