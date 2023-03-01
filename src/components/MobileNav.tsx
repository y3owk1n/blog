"use client";

import * as React from "react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./ui/DropdownMenu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/Button";
import { siteName } from "@/lib/constants";
import { ScrollArea } from "./ui/ScrollArea";
import { classNames } from "@/lib/classNames";

export function MobileNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="-ml-4 text-base hover:bg-transparent focus:ring-0  focus:ring-offset-0 md:hidden">
                    {/* <Icons.logo className="mr-2 h-4 w-4" />{" "} */}
                    <p>Logo</p>
                    <span className="font-bold">Menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                sideOffset={24}
                alignOffset={4}
                className="w-[300px] overflow-scroll">
                <DropdownMenuItem asChild>
                    <Link
                        href="/"
                        className="flex items-center">
                        {/* <Icons.logo className="mr-2 h-4 w-4" /> */}
                        Logo
                        {siteName}
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ScrollArea className="h-[400px]">
                    <DropdownMenuItem asChild>
                        <Link href={"#"}>{"title single"}</Link>
                    </DropdownMenuItem>

                    <DropdownMenuGroup>
                        <DropdownMenuSeparator
                            className={classNames({
                                // hidden: index === 0,
                            })}
                        />
                        <DropdownMenuLabel>{"title nested"}</DropdownMenuLabel>
                        <DropdownMenuSeparator className="-mx-2" />
                        <DropdownMenuItem asChild>
                            {true ? (
                                <Link href={"#"}>title with link</Link>
                            ) : (
                                "Title without link"
                            )}
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
