import { classNames } from "@/lib/classNames";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/Toaster";
import "@/styles/globals.css";
import { Arapey } from "next/font/google";

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
    return (
        <html
            lang="en"
            className={arapey.className}
            suppressHydrationWarning>
            <RootProviders>
                <body
                    className={classNames(
                        "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50"
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
