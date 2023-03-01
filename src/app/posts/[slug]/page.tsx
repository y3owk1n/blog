import { getAllMds } from "@/lib/mdx";
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

export default function Page({ params }: { params: { slug: string } }) {
    const Post = getPost(params.slug);

    return (
        <>
            <article className="my-6">
                <Post />
            </article>
        </>
    );
}
