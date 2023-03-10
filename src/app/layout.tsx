import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/Toaster";
import "@/styles/globals.css";
import { Arapey } from "next/font/google";
import Script from "next/script";
import { twMerge } from "tailwind-merge";

import { DEVDOMAIN, DOMAIN, devEnvironment } from "@/lib/constants";
import RootProviders from "./RootProviders.client";

const title = "Kyle Wong - Digital Marketer, Web Developer.";
const description = `Hello, I'm Kyle, a digital marketer and web developer, based in the Malaysia 🇲🇾.`;
const image = encodeURI(
    `${
        devEnvironment ? DEVDOMAIN : DOMAIN
    }/api/og-image?text=Kyle Wong - Digital Marketer, Web Developer.`
);

export const metadata = {
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

const arapey = Arapey({
    weight: "400",
    variable: "--font-arapey",
    subsets: ["latin"],
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
            className={arapey.className}
            suppressHydrationWarning>
            {!isDev && (
                <Script
                    src={"https://5oddwdpyqe.kylewong.my/umami.js"}
                    data-website-id="2732127c-366b-4a69-8067-b750b856bbd4"
                    strategy="lazyOnload"
                />
            )}
            <RootProviders>
                <body
                    className={twMerge(
                        "min-h-screen bg-slate-50 font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
                        "pattern-dots pattern-bg-transparent pattern-slate-100 pattern-opacity-100 pattern-size-2 dark:pattern-slate-800"
                    )}>
                    <div className="mx-auto flex min-h-screen flex-col">
                        <Toaster />
                        <SiteHeader />
                        <div className="container mx-auto flex-1 p-4">
                            {children}
                        </div>
                        <SiteFooter />
                    </div>
                </body>
            </RootProviders>
        </html>
    );
}
