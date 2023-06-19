import Link from "next/link";
import { notFound } from "next/navigation";
import Date from "@/components/Date";
import { Mdx } from "@/components/Mdx";
import { allPosts } from "@/contentlayer/generated";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

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
            <Link
                className="group mb-10 flex items-center gap-2 font-medium text-foreground"
                href="/posts">
                <ChevronLeftIcon className="h-4 w-4" />
                <span
                    className={twMerge(
                        "transition-all group-hover:underline group-hover:underline-offset-4 "
                    )}>
                    Back
                </span>
            </Link>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {content.title}
            </h3>
            <div className="my-4 text-sm text-muted-foreground">
                <Date dateString={content.date} />
            </div>

            <Mdx code={content.body.code} />
        </>
    );
}
