"use client";

import { GiftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { CommandMenu } from "./CommandMenu";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { buttonVariants } from "./ui/Button";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white ">
            <div className="flex h-16 items-center px-4">
                <MainNav />
                <MobileNav />
                <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>
                    <nav className="flex items-center space-x-1">
                        <Link
                            href={"#"}
                            target="_blank"
                            rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                    className: "text-slate-700 ",
                                })}>
                                <GiftIcon className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
