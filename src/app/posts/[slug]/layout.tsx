import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "@/contentlayer/generated";

import { DEVDOMAIN, devEnvironment, DOMAIN } from "@/lib/constants";

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
    const image = encodeURI(
        `${devEnvironment ? DEVDOMAIN : DOMAIN}/api/og-image/${content.title}`
    );
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
        <div className="">
            <article className="space-y-6">{children}</article>
        </div>
    );
}
