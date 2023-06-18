import Link from "next/link";

import { DEVDOMAIN, devEnvironment, DOMAIN } from "@/lib/constants";
import { allPostsAndSort } from "@/lib/contentlayerApi";
import CoverImage from "@/components/CoverImage";
import Date from "@/components/Date";
import { H3 } from "@/components/ui/typography/H3";
import { Paragraph } from "@/components/ui/typography/Paragraph";

const title = "Post List | Kyle Wong";
const description = `A list for all my blogs and sharings`;
const image = encodeURI(
    `${
        devEnvironment ? DEVDOMAIN : DOMAIN
    }/api/og-image/A list for all my blogs and sharings`
);

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: DOMAIN,
        siteName: title,
        images: [image],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
    },
};

const Page = () => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {allPostsAndSort.map((post, index) => (
                <div key={`${post.title}-${index}`}>
                    <div className="mb-5">
                        <CoverImage
                            slug={post.href}
                            title={post.title}
                            src={post.cover}
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
