"use client";

import Link from "next/link";
import { CommandMenu } from "./CommandMenu";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { buttonVariants } from "./ui/Button";
import { AiFillGithub } from "react-icons/ai";
import { Logo } from "./Logo";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white ">
            <div className="container mx-auto flex h-16 items-center px-4">
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                    <MobileNav />
                    <div className="hidden w-full flex-1 md:block md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>

                    <Logo className="h-10 w-10 md:hidden" />
                    <nav className="flex items-center space-x-1">
                        <Link
                            href={"https://github.com/y3owk1n"}
                            target="_blank"
                            rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                    className: "text-slate-700 ",
                                })}>
                                <AiFillGithub className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
