import CoverImage from "@/components/CoverImage";
import Date from "@/components/Date";
import Link from "next/link";
import { allPosts } from "@/contentlayer/generated";

const Page = () => {
    const posts = allPosts.map((content) => ({
        slug: content.slug,
        title: content.title,
        date: content.date,
        description: content.description,
        href: `/posts/${content.slugAsParams}`,
        coverImage: content.coverImage,
    }));

    const sorted = posts.sort((a, b) =>
        a.date && b.date && a.date > b.date ? -1 : 1
    );

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {sorted.map((post, index) => (
                <div key={`${post.title}-${index}`}>
                    <div className="mb-5">
                        <CoverImage
                            slug={post.href}
                            title={post.title}
                            src={post.coverImage}
                        />
                    </div>
                    <h3 className="mb-3 text-3xl leading-snug">
                        <Link
                            href={post.href}
                            passHref
                            className="hover:underline">
                            {post.title}
                        </Link>
                    </h3>
                    <div className="mb-4 text-gray-500">
                        <Date dateString={post.date} />
                    </div>
                    <p className="mb-4 text-lg leading-relaxed">
                        {post.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Page;
