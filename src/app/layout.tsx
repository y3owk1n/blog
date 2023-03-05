import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/Toaster";
import { classNames } from "@/lib/classNames";
import "@/styles/globals.css";

export const metadata = {
    title: "UI",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body
                className={classNames(
                    "min-h-screen bg-white font-sans text-slate-900 antialiased "
                )}>
                <div className="flex min-h-screen flex-col">
                    <Toaster />
                    <SiteHeader />
                    <div className="flex-1 p-4">{children}</div>
                    <SiteFooter />
                </div>
            </body>
        </html>
    );
}
