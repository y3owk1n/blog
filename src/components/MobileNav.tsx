"use client";

import * as React from "react";
import Link from "next/link";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/Drawer";
import { Button, buttonVariants } from "./ui/Button";
import { ScrollArea } from "./ui/ScrollArea";
import { allPosts, allUis } from "@/contentlayer/generated";
import { ListItem } from "./MainNav";
import { Separator } from "./ui/Separator";
import { groupBy } from "@/lib/groupBy";
import { SidebarNav } from "./SidebarNav";
import { useState } from "react";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    const posts = allPosts.map((content) => ({
        slug: content.slug,
        title: content.title,
        date: content.date,
        description: content.description,
        href: `/posts/${content.slugAsParams}`,
    }));

    const sorted = posts.sort((a, b) =>
        a.date && b.date && a.date > b.date ? -1 : 1
    );

    const postsWithTitle = [
        {
            title: "Posts",
            items: sorted.map((item) => ({
                title: item.title,
                href: item.href,
                items: [],
            })),
        },
    ];

    const groupByTags = groupBy(allUis, (ui) => ui.tag).map((ui) => ({
        title: ui.title,
        items: ui.items.map((item) => ({
            title: item.title,
            href: item.slug,
            items: [],
        })),
    }));

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
                        items={groupByTags}
                        onClickCallback={() => setOpen(false)}
                    />
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
}
