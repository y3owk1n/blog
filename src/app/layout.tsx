import type { NavItem } from "@/components/SidebarNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Toaster } from "@/components/ui/Toaster";
import { classNames } from "@/lib/classNames";
import { getAllMds, getLatestThreeMd } from "@/lib/mdx";
import "@/styles/globals.css";

export const metadata = {
    title: "UI",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const posts = await getLatestThreeMd(
        ["slug", "title", "date", "excerpt"],
        "_posts"
    );

    const postItems: NavItem[] = posts.map((post) => ({
        title: post.title || "",
        description: post.excerpt || "",
        href: `/posts/${post.slug || "#"}`,
    }));

    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body
                className={classNames(
                    "min-h-screen bg-white font-sans text-slate-900 antialiased "
                )}>
                <div className="flex min-h-screen flex-col">
                    <SiteHeader postItems={postItems} />
                    <div className="flex-1 p-4">{children}</div>
                    <SiteFooter />
                </div>
            </body>
            <Toaster />
        </html>
    );
}
