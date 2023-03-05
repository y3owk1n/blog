import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/Toaster";
import { classNames } from "@/lib/classNames";
import "@/styles/globals.css";
import { Arapey } from "next/font/google";

export const metadata = {
    title: "UI",
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
            <body
                className={classNames(
                    "min-h-screen bg-white font-sans text-slate-900 antialiased "
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
        </html>
    );
}
