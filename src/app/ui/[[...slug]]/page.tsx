import { notFound } from "next/navigation";
import { allUis } from "@/contentlayer/generated";
import { getTableOfContents } from "@/lib/toc";
import { PageHeader } from "@/components/PageHeader";
import { Mdx } from "@/components/Mdx";
import { Separator } from "@/components/ui/Separator";
import { TableOfContents } from "@/components/TableOfContents";
import { Pager } from "@/components/Pager";
import Link from "next/link";
import { TbBrandRadixUi } from "react-icons/tb";

interface PageProps {
    params: {
        slug: string[];
    };
}

export function generateStaticParams(): PageProps["params"][] {
    return allUis.map((content) => ({
        slug: content.slugAsParams.split("/"),
    }));
}

export default async function Page({ params }: PageProps) {
    const slug = params?.slug?.join("/") || "";
    const content = allUis.find((content) => content.slugAsParams === slug);

    if (!content) {
        notFound();
    }

    const toc = await getTableOfContents(content.body.raw);

    return (
        <main className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0">
                <PageHeader
                    heading={content.title}
                    text={content.description}>
                    {content.radix ? (
                        <div className="flex items-center space-x-2 pt-4">
                            {content.radix?.link && (
                                <Link
                                    href={content.radix.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-700 hover:text-slate-50">
                                    <TbBrandRadixUi className="mr-1 h-3 w-3" />
                                    Radix UI
                                </Link>
                            )}
                            {content.radix?.api && (
                                <Link
                                    href={content.radix.api}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-700 hover:text-slate-50">
                                    API Reference
                                </Link>
                            )}
                        </div>
                    ) : null}
                </PageHeader>
                <Mdx code={content.body.code} />
                <Separator className="my-4 md:my-6" />
                <Pager content={content} />
            </div>
            <div className="hidden text-sm xl:block">
                <div className="sticky top-20 max-h-[calc(100vh-10vh)] overflow-y-auto">
                    <TableOfContents toc={toc} />
                </div>
            </div>
        </main>
    );
}
