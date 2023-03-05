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
} from "./ui/NavigationMenu";
import { siteDescription, siteName } from "@/lib/constants";
import { classNames } from "@/lib/classNames";
import { buttonVariants } from "./ui/Button";
import { allUis } from "@/contentlayer/generated";
import { firstThreePosts } from "@/lib/contentlayerApi";
import { Logo } from "./Logo";

export function MainNav() {
    return (
        <div className="hidden md:flex">
            <Link
                href="/"
                className="mr-6 flex items-center space-x-2">
                <Logo className="h-10 w-10 text-black dark:text-white" />
                <span className="sr-only">{siteName}</span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-9">
                            Posts
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <Link href="/">
                                        <NavigationMenuLink
                                            className="grid h-full w-full select-none items-center justify-center 
                     space-y-2 rounded-md bg-gradient-to-b from-white to-slate-200 p-6 no-underline outline-none focus:shadow-md dark:from-slate-200 dark:to-slate-800">
                                            <Logo className="h-10 w-10 text-black dark:text-white" />
                                        </NavigationMenuLink>
                                    </Link>
                                </li>
                                {firstThreePosts.map((post, index) => (
                                    <ListItem
                                        key={`${post.title}-${index}`}
                                        href={post.href}
                                        title={post.title}>
                                        {post.description}
                                    </ListItem>
                                ))}
                            </ul>
                            <div className="p-4 pt-0">
                                <Link
                                    href="/posts"
                                    passHref
                                    legacyBehavior>
                                    <NavigationMenuLink
                                        className={classNames(
                                            buttonVariants({
                                                variant: "outline",
                                            }),
                                            "w-full "
                                        )}>
                                        Browse all posts
                                    </NavigationMenuLink>
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="h-9">
                            UI
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[600px] grid-cols-2 gap-3 p-4">
                                {allUis
                                    .filter((content) => content.featured)
                                    .map((content) => (
                                        <ListItem
                                            key={content._id}
                                            title={content.title}
                                            href={content.slug}>
                                            {content.description}
                                        </ListItem>
                                    ))}
                            </ul>
                            <div className="p-4 pt-0">
                                <Link
                                    href="/ui/accordion"
                                    passHref
                                    legacyBehavior>
                                    <NavigationMenuLink
                                        className={classNames(
                                            buttonVariants({
                                                variant: "outline",
                                            }),
                                            "w-full "
                                        )}>
                                        More UIs
                                    </NavigationMenuLink>
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export const ListItem = React.forwardRef<
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
                        className
                    )}>
                    <div className="font-serif  font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400 ">
                        {children}
                    </p>
                </NavigationMenuLink>
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";
