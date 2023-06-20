import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import TraworldHover from "./TraworldHover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { buttonVariants } from "./ui/Button";
import { githubProfile, linkedInProfile } from "@/lib/constants";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const SiteHeader = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <Avatar className="mb-8 h-20 w-20">
                    <AvatarImage src="https://github.com/y3owk1n.png" />
                    <AvatarFallback>KW</AvatarFallback>
                </Avatar>

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Kyle Wong
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    Head Of Marketing at <TraworldHover />
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I build brands, strategies and experiences in the digital
                    world.
                </p>
            </div>

            <nav
                className="hidden lg:block"
                aria-label="In-page jump links">
                <ul className="mt-16 grid gap-4">
                    <li>
                        <Link
                            className="group font-medium text-foreground transition-all duration-300 ease-in-out "
                            href="/#about">
                            <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group font-medium text-foreground transition-all duration-300 ease-in-out "
                            href="/#experiences">
                            <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                Experiences
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group font-medium text-foreground transition-all duration-300 ease-in-out "
                            href="/#projects">
                            <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                Projects
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group font-medium text-foreground transition-all duration-300 ease-in-out "
                            href="/#posts">
                            <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                Posts
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <ul className="mt-10 flex items-center gap-2">
                <li className="text-xs">
                    <a
                        href={linkedInProfile}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={twMerge(
                            "block hover:text-foreground",
                            buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })
                        )}>
                        <span className="sr-only">LinkedIn</span>
                        <AiFillLinkedin className="h-6 w-6" />
                    </a>
                </li>
                <li className="text-xs">
                    <a
                        href={githubProfile}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={twMerge(
                            "block hover:text-foreground",
                            buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })
                        )}>
                        <span className="sr-only">Github</span>
                        <AiFillGithub className="h-6 w-6" />
                    </a>
                </li>
                <li className="text-xs">
                    <DarkModeToggle />
                </li>
            </ul>
        </header>
    );
};

export default SiteHeader;
