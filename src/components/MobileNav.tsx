"use client";

import * as React from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import { allPostsWithTitle } from "@/lib/contentlayerApi";
import { SidebarNav } from "./SidebarNav";
import { Button } from "./ui/Button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/Drawer";
import { ScrollArea } from "./ui/ScrollArea";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    className="flex gap-2 p-1 text-base hover:bg-transparent focus:ring-0  focus:ring-offset-0 md:hidden">
                    <Bars3Icon className="h-4 w-4 " />
                    <span className="sr-only font-bold">Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent
                position="left"
                size="full">
                <ScrollArea className="h-[calc(100vh-4vh)]">
                    <SidebarNav
                        items={allPostsWithTitle}
                        onClickCallback={() => setOpen(false)}
                    />
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
}
