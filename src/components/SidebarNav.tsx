"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { classNames } from "@/lib/classNames";

export interface NavItem {
    title: string;
    description?: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    label?: string;
}

export function SidebarNav({ items }: { items: NavItem[] }) {
    const pathname = usePathname();

    return items.length ? (
        <div className="w-full">
            {items.map((item, index) => (
                <Link
                    key={index}
                    href={item.href ?? "#"}
                    className={classNames(
                        "group flex w-full items-center rounded-md py-1.5 px-2 hover:bg-slate-50 ",
                        item.disabled && "cursor-not-allowed opacity-60",
                        {
                            "bg-slate-100 ": pathname === item.href,
                        }
                    )}
                    target={item.external ? "_blank" : ""}
                    rel={item.external ? "noreferrer" : ""}>
                    {item.title}
                    {item.label && (
                        <span className="ml-2 rounded-md bg-teal-100 px-1.5 py-0.5 text-xs no-underline group-hover:no-underline ">
                            {item.label}
                        </span>
                    )}
                </Link>
            ))}
        </div>
    ) : null;
}
