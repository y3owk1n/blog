"use client";

import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import type { NavItem, NavItemWithChildren } from "@/types/nav";
import { classNames } from "@/lib/classNames";
import { groupUisByTags } from "@/lib/contentlayerApi";
import type { Ui } from "../../.contentlayer/generated";
import { buttonVariants } from "./ui/Button";

interface PagerProps {
    content: Ui;
}

export function Pager({ content }: PagerProps) {
    const pager = getPager(content);

    if (!pager) {
        return null;
    }

    const hasPrev = pager.prev?.href && !pager.next?.href;
    const hasNext = pager.next?.href && !pager.prev?.href;
    const hasBoth = pager.next?.href && pager.prev?.href;

    return (
        <div
            className={classNames(
                "flex flex-row items-center",
                hasBoth && "justify-between",
                hasPrev && "justify-start",
                hasNext && "justify-end"
            )}>
            {pager?.prev?.href && (
                <Link
                    href={pager.prev.href}
                    className={buttonVariants({ variant: "outline" })}>
                    <ChevronLeftIcon className="mr-2 h-4 w-4" />
                    {pager.prev.title}
                </Link>
            )}
            {pager?.next?.href && (
                <Link
                    href={pager.next.href}
                    className={buttonVariants({ variant: "outline" })}>
                    {pager.next.title}
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Link>
            )}
        </div>
    );
}

export function getPager(doc: Ui) {
    const flattenedLinks = [
        null,
        ...flatten(groupUisByTags.sort((a, b) => (a.title > b.title ? -1 : 1))),
        null,
    ];
    const activeIndex = flattenedLinks.findIndex(
        (link) => doc.slug === link?.href
    );
    const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
    const next =
        activeIndex !== flattenedLinks.length - 1
            ? flattenedLinks[activeIndex + 1]
            : null;
    return {
        prev,
        next,
    };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
    return links.reduce<NavItem[]>((flat, link) => {
        return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, []);
}
