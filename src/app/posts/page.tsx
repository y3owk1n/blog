import CoverImage from "@/components/CoverImage";
import Date from "@/components/Date";
import { H3 } from "@/components/ui/typography/H3";
import { Paragraph } from "@/components/ui/typography/Paragraph";
import { getAllMds } from "@/lib/mdx";
import Link from "next/link";

const Page = async () => {
    const posts = await getAllMds(
        ["slug", "title", "date", "coverImage", "excerpt"],
        "_posts"
    );

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {posts.map((post, index) => (
                <div
                    key={`${post.title || ""}-${index}`}
                    className="space-y-2">
                    <div className="mb-5">
                        <CoverImage
                            slug={post.slug}
                            title={post.title || ""}
                            src={post.coverImage || ""}
                        />
                    </div>
                    <H3>
                        <Link
                            href={`/posts/${post.slug || ""}`}
                            passHref
                            className="hover:underline">
                            {post.title}
                        </Link>
                    </H3>
                    <Paragraph variant="subtle">
                        <Date dateString={post.date || ""} />
                    </Paragraph>
                    <Paragraph className="text-slate-700 line-clamp-2">
                        {post.excerpt}
                    </Paragraph>
                </div>
            ))}
        </div>
    );
};

export default Page;
