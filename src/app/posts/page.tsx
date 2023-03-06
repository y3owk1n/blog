import Link from "next/link";

import { allPostsAndSort } from "@/lib/contentlayerApi";
import CoverImage from "@/components/CoverImage";
import Date from "@/components/Date";
import { H3 } from "@/components/ui/typography/H3";
import { Paragraph } from "@/components/ui/typography/Paragraph";

const Page = () => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {allPostsAndSort.map((post, index) => (
                <div key={`${post.title}-${index}`}>
                    <div className="mb-5">
                        <CoverImage
                            slug={post.href}
                            title={post.title}
                            src={post.coverImage}
                        />
                    </div>
                    <H3 className="font-serif">
                        <Link
                            href={post.href}
                            passHref
                            className="hover:underline">
                            {post.title}
                        </Link>
                    </H3>
                    <div className="my-4 text-sm text-gray-500">
                        <Date dateString={post.date} />
                    </div>
                    <Paragraph>{post.description}</Paragraph>
                </div>
            ))}
        </div>
    );
};

export default Page;
