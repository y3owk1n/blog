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
import { Separator } from "./ui/Separator";
import { classNames } from "@/lib/classNames";
import { buttonVariants } from "./ui/Button";
import { allPosts, allUis } from "@/contentlayer/generated";

export function MainNav() {
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
    const sliced = sorted.slice(0, 3);

    return (
        <div className="hidden md:flex">
            <Link
                href="/"
                className="mr-6 flex items-center space-x-2">
                <p>Kyle</p>
                {/* <Icons.logo className="h-6 w-6" /> */}
                <span className="hidden font-bold sm:inline-block">
                    {siteName}
                </span>
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
                                {sliced.map((post, index) => (
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
                            Ui
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
                                        More Uis
                                    </NavigationMenuLink>
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem className="hidden lg:flex"> */}
                    {/*     <Link */}
                    {/*         href="/figma" */}
                    {/*         legacyBehavior */}
                    {/*         passHref> */}
                    {/*         <NavigationMenuLink */}
                    {/*             className={classNames( */}
                    {/*                 navigationMenuTriggerStyle(), */}
                    {/*                 "h-9" */}
                    {/*             )}> */}
                    {/*             Figma */}
                    {/*         </NavigationMenuLink> */}
                    {/*     </Link> */}
                    {/* </NavigationMenuItem> */}
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 ",
                        className
                    )}>
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-sm leading-snug text-slate-500 line-clamp-2 ">
                        {children}
                    </p>
                </NavigationMenuLink>
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";
