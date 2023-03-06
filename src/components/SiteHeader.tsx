"use client";

import { CommandMenu } from "./CommandMenu";
import DarkModeToggle from "./DarkModeToggle";
import { Logo } from "./Logo";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-800 dark:bg-slate-900">
            <div className="container mx-auto flex h-16 items-center px-4">
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                    <MobileNav />
                    <div className="hidden w-full flex-1 md:block md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>

                    <Logo className="h-10 w-10 md:hidden" />
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    );
}
