import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allUis } from "@/contentlayer/generated";

import { DEVDOMAIN, DOMAIN, devEnvironment } from "@/lib/constants";
import { groupUisByTags } from "@/lib/contentlayerApi";
import { SidebarNav } from "@/components/SidebarNav";
import { ScrollArea } from "@/components/ui/ScrollArea";

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const content = allUis.find((ui) => ui.slugAsParams === params.slug);

    if (!content) return notFound();

    const title = `${content.title} | Kyle's UIs`;
    const description = content.description;
    const image = encodeURI(
        `${devEnvironment ? DEVDOMAIN : DOMAIN}/api/og-image?text=${
            content.description
        }`
    );
    const date = new Date(content.date).toISOString();

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${DOMAIN}/ui/${content.slugAsParams}`,
            siteName: title,
            images: [image],
            locale: "en-US",
            type: "article",
            publishedTime: date,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

interface UiLayoutProps {
    children: React.ReactNode;
}

export default function UiLayout({ children }: UiLayoutProps) {
    return (
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-20 z-30 hidden h-[calc(100vh-10vh)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 md:sticky md:block">
                <ScrollArea className="pr-4">
                    <SidebarNav items={groupUisByTags} />
                </ScrollArea>
            </aside>
            {children}
        </div>
    );
}
