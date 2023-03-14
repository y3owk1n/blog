import { notFound } from "next/navigation";
import { allPosts } from "@/contentlayer/generated";

import { DEVDOMAIN, DOMAIN, devEnvironment } from "@/lib/constants";
import CoverImage from "@/components/CoverImage";
import Date from "@/components/Date";
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
        <>
            <H1 className="font-serif">{content.title}</H1>
            <div className="my-4 text-sm text-gray-500">
                <Date dateString={content.date} />
            </div>

            <CoverImage
                title={content.title}
                src={`${
                    devEnvironment ? DEVDOMAIN : DOMAIN
                }/api/og-image?slug=${content.slugAsParams}&type=post`}
                isEager
            />

            <Mdx code={content.body.code} />
        </>
    );
}
