"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

import { useMounted } from "@/lib/hooks/useMounted";
import type { TableOfContents } from "@/lib/toc";

interface TocProps {
    toc: TableOfContents;
}

export function TableOfContents({ toc }: TocProps) {
    const itemIds = React.useMemo(
        () =>
            toc.items
                ? toc.items
                      .flatMap((item) => [
                          item.url,
                          item?.items?.map((item) => item.url),
                      ])
                      .flat()
                      .filter(Boolean)
                      .map((id) => id?.split("#")[1])
                : [],
        [toc]
    );
    const activeHeading = useActiveItem(itemIds);
    const mounted = useMounted();

    if (!toc?.items || !mounted) {
        return null;
    }

    return (
        <div>
            <p className="mb-1 rounded-md  font-serif text-sm font-semibold">
                On This Page
            </p>
            <Tree
                tree={toc}
                activeItem={activeHeading}
            />
        </div>
    );
}

function useActiveItem(itemIds: (string | undefined)[]) {
    const [activeId, setActiveId] = React.useState<string | null>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: `0% 0% -80% 0%` }
        );

        itemIds?.forEach((id) => {
            const element = document.getElementById(id as string);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            itemIds?.forEach((id) => {
                const element = document.getElementById(id as string);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [itemIds]);

    return activeId;
}

interface TreeProps {
    tree: TableOfContents;
    level?: number;
    activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
    return tree?.items?.length && level < 3 ? (
        <ul className={twMerge("m-0 list-none", level !== 1 && "pl-4")}>
            {tree.items.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={twMerge("mt-0 pt-2")}>
                        <a
                            href={item.url}
                            className={twMerge(
                                "inline-block no-underline",
                                activeItem
                                    ? item.url === `#${activeItem}`
                                        ? "text-state-900 font-medium"
                                        : "text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 "
                                    : ""
                            )}>
                            {item.title}
                        </a>
                        {item.items?.length ? (
                            <Tree
                                tree={item}
                                level={level + 1}
                                activeItem={activeItem}
                            />
                        ) : null}
                    </li>
                );
            })}
        </ul>
    ) : null;
}
