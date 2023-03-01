"use client";

import * as React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/NavigationMenu";
import { siteDescription, siteName } from "@/lib/constants";
import { Separator } from "./ui/Separator";
import { classNames } from "@/lib/classNames";
import { buttonVariants } from "./ui/Button";

export function MainNav() {
    return (
        <div className="hidden md:flex">
            <Link
                href="/"
                className="mr-6 flex items-center space-x-2">
                <p>Logo</p>
                {/* <Icons.logo className="h-6 w-6" /> */}
                <span className="hidden font-bold sm:inline-block">
                    {siteName}
                </span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-9">
                            Getting started
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <Link
                                        href="/"
                                        passHref
                                        legacyBehavior>
                                        <NavigationMenuLink
                                            className="flex h-full w-full select-none 
                    flex-col justify-end space-y-2 rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md">
                                            <div className="text-lg font-medium text-white">
                                                {siteName}
                                            </div>
                                            <p className="text-sm leading-snug text-white/90">
                                                {siteDescription}
                                            </p>
                                        </NavigationMenuLink>
                                    </Link>
                                </li>
                                <ListItem
                                    href="/docs"
                                    title="Introduction">
                                    Re-usable components built using Radix UI
                                    and Tailwind CSS.
                                </ListItem>
                                <ListItem
                                    href="/docs/installation"
                                    title="Installation">
                                    How to install dependencies and structure
                                    your app.
                                </ListItem>
                                <ListItem
                                    href="/docs/primitives/typography"
                                    title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-9">
                            Components
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[600px] grid-cols-2 gap-3 p-4">
                                <ListItem
                                    title={"title"}
                                    href={"href"}>
                                    Decs
                                </ListItem>
                            </ul>
                            <div className="p-4 pt-0">
                                <Separator className="mb-4" />
                                <Link
                                    href="/docs/primitives/accordion"
                                    passHref
                                    legacyBehavior>
                                    <NavigationMenuLink
                                        className={classNames(
                                            buttonVariants({
                                                variant: "outline",
                                            }),
                                            "w-full "
                                        )}>
                                        Browse components
                                    </NavigationMenuLink>
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden lg:flex">
                        <Link
                            href="/figma"
                            legacyBehavior
                            passHref>
                            <NavigationMenuLink
                                className={classNames(
                                    navigationMenuTriggerStyle(),
                                    "h-9"
                                )}>
                                Figma
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden lg:flex">
                        <Link
                            href={"git.com"}
                            legacyBehavior
                            passHref>
                            <NavigationMenuLink
                                className={classNames(
                                    navigationMenuTriggerStyle(),
                                    "h-9"
                                )}>
                                GitHub
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <Link
                href={href}
                passHref
                legacyBehavior
                {...props}>
                <NavigationMenuLink
                    className={classNames(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 ",
                        className
                    )}>
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 ">
                        {children}
                    </p>
                </NavigationMenuLink>
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";
