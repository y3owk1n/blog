import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "@/contentlayer/generated";

import { DEVDOMAIN, DOMAIN, devEnvironment } from "@/lib/constants";

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const content = allPosts.find((post) => post.slugAsParams === params.slug);
    //
    if (!content) return notFound();

    const title = `${content.title} | Kyle's Blog`;
    const description = content.description;
    const image = `${devEnvironment ? DEVDOMAIN : DOMAIN}/api/og-image?slug=${
        params.slug
    }&type=post`;
    const date = new Date(content.date).toISOString();

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${DOMAIN}/posts/${content.slugAsParams}`,
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

interface PostLayoutProps {
    children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
    return (
        <div className="mx-auto max-w-[65ch]">
            <article className="space-y-4 py-10">{children}</article>
        </div>
    );
}
