"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { SidebarNavItem } from "@/types/nav";
import { classNames } from "@/lib/classNames";

export interface SidebarNavProps {
    items: SidebarNavItem[];
    onClickCallback?: () => void;
}

export function SidebarNav({ items, onClickCallback }: SidebarNavProps) {
    const pathname = usePathname();

    return items.length ? (
        <div className="w-full">
            {items
                .sort((a, b) => (a.title > b.title ? -1 : 1))
                .map((item, index) => (
                    <div
                        key={index}
                        className={classNames("pb-6")}>
                        <h4 className="mb-1 rounded-md px-2 py-1 font-serif text-sm font-semibold">
                            {item.title}
                        </h4>
                        {item?.items?.length && (
                            <SidebarNavItems
                                onClickCallback={onClickCallback}
                                items={item.items}
                                pathname={pathname}
                            />
                        )}
                    </div>
                ))}
        </div>
    ) : null;
}

interface SidebarNavItemsProps {
    items: SidebarNavItem[];
    pathname: string | null;
    onClickCallback?: () => void;
}

export function SidebarNavItems({
    items,
    pathname,
    onClickCallback,
}: SidebarNavItemsProps) {
    return items?.length ? (
        <div className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item, index) =>
                item.href ? (
                    <Link
                        key={index}
                        href={item.href}
                        onClick={onClickCallback}
                        className={classNames(
                            "group flex w-full items-center rounded-md py-1.5 px-2 hover:bg-slate-50 dark:hover:bg-slate-800",
                            item.disabled && "cursor-not-allowed opacity-60",
                            pathname === item.href &&
                                "bg-slate-100 dark:bg-slate-800"
                        )}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer" : ""}>
                        {item.title}
                        {item.label && (
                            <span className="ml-2 rounded-md bg-teal-100 px-1.5 py-0.5 text-xs no-underline group-hover:no-underline dark:text-slate-900">
                                {item.label}
                            </span>
                        )}
                    </Link>
                ) : (
                    <span
                        key={index}
                        className="flex w-full cursor-not-allowed items-center rounded-md p-2 font-serif opacity-60 hover:underline">
                        {item.title}
                    </span>
                )
            )}
        </div>
    ) : null;
}
