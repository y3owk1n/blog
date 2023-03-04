import CoverImage from "@/components/CoverImage";
import { H1 } from "@/components/ui/typography/H1";
import { getAllMds, getMdDetailBySlug } from "@/lib/mdx";
import dynamic from "next/dynamic";

export const dynamicParams = false;

const type = "_posts";

export async function generateStaticParams() {
    const posts = await getAllMds(["slug"], type);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const getPost = (slug: string) => {
    return dynamic(() => import(`../../../${type}/${slug}.mdx`));
};

export default async function Page({ params }: { params: { slug: string } }) {
    const Post = getPost(params.slug);

    const postMeta = await getMdDetailBySlug(
        params.slug,
        ["coverImage", "title", "date"],
        "_posts"
    );

    return (
        <div className="mx-auto max-w-[65ch]">
            <article className="space-y-4">
                <H1>{postMeta.title}</H1>

                <CoverImage
                    title={postMeta.title || ""}
                    src={postMeta.coverImage || ""}
                    isEager
                />
                <div className="prose">
                    <Post />
                </div>
            </article>
        </div>
    );
}
