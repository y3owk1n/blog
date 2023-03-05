import CoverImage from "@/components/CoverImage";
import { H1 } from "@/components/ui/typography/H1";
import { allPosts } from "@/contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";

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
                <H1>{content.title}</H1>

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
