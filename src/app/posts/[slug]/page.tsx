import { notFound } from "next/navigation";
import { allPosts } from "@/contentlayer/generated";

import CoverImage from "@/components/CoverImage";
import { Mdx } from "@/components/Mdx";
import { H1 } from "@/components/ui/typography/H1";

interface PageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams(): PageProps["params"][] {
    return allPosts.map((content) => ({
        slug: content.slugAsParams,
    }));
}

export default function Page({ params }: PageProps) {
    const slug = params.slug;
    const content = allPosts.find((content) => content.slugAsParams === slug);

    if (!content) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-[65ch]">
            <article className="space-y-4">
                <H1 className="font-serif">{content.title}</H1>

                <CoverImage
                    title={content.title}
                    src={content.coverImage}
                    isEager
                />

                <Mdx code={content.body.code} />
            </article>
        </div>
    );
}
