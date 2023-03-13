"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { siteName } from "@/lib/constants";
import { CommandMenu } from "./CommandMenu";
import DarkModeToggle from "./DarkModeToggle";
import { Logo } from "./Logo";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
    return (
        <header
            className={twMerge(
                "sticky top-0 z-40 w-full border-b border-b-slate-200 bg-slate-50 dark:border-b-slate-800 dark:bg-slate-900",
                "pattern-dots pattern-bg-transparent pattern-slate-100 pattern-opacity-100 pattern-size-2 dark:pattern-slate-800"
            )}>
            <div className="container mx-auto flex h-16 items-center px-4">
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                    <MobileNav />
                    <div className="hidden w-full flex-1 md:block md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>

                    <Link
                        href="/"
                        className="mr-6 flex items-center space-x-2 md:hidden">
                        <Logo className="h-10 w-10 text-black dark:text-white" />
                        <span className="sr-only">{siteName}</span>
                    </Link>
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    );
}
