"use client";

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

import { githubProfile } from "@/lib/constants";
import { Logo } from "./Logo";
import { buttonVariants } from "./ui/Button";

export function SiteFooter() {
    return (
        <footer className="flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-4 dark:border-t-slate-800  md:flex-row">
            <div className="container mx-auto flex flex-col items-center gap-2 px-4 md:flex-row md:gap-4">
                <Logo className="h-10 w-10 text-black dark:text-white" />
                <p className="text-center text-sm leading-loose text-slate-600 dark:text-slate-400  md:text-left">
                    Kyle Wong
                </p>
                <nav className="flex items-center space-x-1">
                    <Link
                        href={githubProfile}
                        target="_blank"
                        rel="noreferrer">
                        <div
                            className={buttonVariants({
                                size: "sm",
                                variant: "ghost",
                                className: "text-slate-700 dark:text-slate-400",
                            })}>
                            <AiFillGithub className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
