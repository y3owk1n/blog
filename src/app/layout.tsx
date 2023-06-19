import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

import {
    DEVDOMAIN,
    devEnvironment,
    DOMAIN,
    githubProfile,
    linkedInProfile,
} from "@/lib/constants";
import CustomCursor from "@/components/CustomCursor";
import DarkModeToggle from "@/components/DarkModeToggle";
import TraworldHover from "@/components/TraworldHover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { buttonVariants } from "@/components/ui/Button";
import RootProviders from "./RootProviders.client";

const title = "Kyle Wong - Digital Marketer, Web Developer.";
const description = `Hello, I'm Kyle, a digital marketer and web developer, based in the Malaysia 🇲🇾.`;
const image = encodeURI(
    `${
        devEnvironment ? DEVDOMAIN : DOMAIN
    }/api/og-image/Kyle Wong - Digital Marketer, Web Developer.`
);

export const metadata = {
    metadataBase: new URL("https://kylewong.my"),
    title,
    description,
    openGraph: {
        title,
        description,
        url: DOMAIN,
        siteName: title,
        images: [image],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        shortcut: ["/favicon/favicon.ico"],
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon/safari-pinned-tab.svg",
            },
        ],
    },
    manifest: "/favicon/site.webmanifest",
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
    },
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDev = process.env.NODE_ENV === "development";

    return (
        <html
            lang="en"
            suppressHydrationWarning>
            {!isDev && (
                <Script
                    async
                    src={"https://5oddwdpyqe.kylewong.my/umami.js"}
                    data-website-id="2732127c-366b-4a69-8067-b750b856bbd4"
                    strategy="lazyOnload"
                />
            )}
            <body
                className={twMerge(
                    "min-h-screen scroll-smooth bg-background font-sans text-muted-foreground antialiased",
                    fontSans.variable
                )}>
                <RootProviders>
                    <CustomCursor />
                    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                        <Link
                            href="/#content"
                            className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                            Skip to Content
                        </Link>
                        <div className="lg:flex lg:justify-between lg:gap-4">
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
                                        I build brands, strategies and
                                        experiences in the digital world.
                                    </p>
                                </div>

                                <nav
                                    className="hidden lg:block"
                                    aria-label="In-page jump links">
                                    <ul className="mt-16 grid gap-4">
                                        <li>
                                            <Link href="/#about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/#experiences">
                                                Experiences
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#projects">
                                                Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#posts">Posts</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <ul className="mt-10 flex items-center gap-2">
                                    <li className="text-xs">
                                        <a
                                            href={linkedInProfile}
                                            target="_blank"
                                            rel="noreferer"
                                            className={twMerge(
                                                "block hover:text-foreground",
                                                buttonVariants({
                                                    variant: "ghost",
                                                    size: "sm",
                                                })
                                            )}>
                                            <span className="sr-only">
                                                LinkedIn
                                            </span>
                                            <AiFillLinkedin className="h-6 w-6" />
                                        </a>
                                    </li>
                                    <li className="text-xs">
                                        <a
                                            href={githubProfile}
                                            target="_blank"
                                            rel="noreferer"
                                            className={twMerge(
                                                "block hover:text-foreground",
                                                buttonVariants({
                                                    variant: "ghost",
                                                    size: "sm",
                                                })
                                            )}>
                                            <span className="sr-only">
                                                Github
                                            </span>
                                            <AiFillGithub className="h-6 w-6" />
                                        </a>
                                    </li>
                                    <li className="text-xs">
                                        <DarkModeToggle />
                                    </li>
                                </ul>
                            </header>

                            <main
                                id="content"
                                className="space-y-32 pt-24 lg:w-1/2 lg:py-24">
                                {children}
                            </main>
                        </div>
                    </div>
                </RootProviders>
            </body>
        </html>
    );
}
