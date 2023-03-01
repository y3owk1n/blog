import { getAllMds } from "@/lib/mdx";

import dynamic from "next/dynamic";

export const dynamicParams = false;

const type = "_docs";

export async function generateStaticParams() {
    const posts = await getAllMds(["slug"], type);

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const getDocs = (slug: string) => {
    return dynamic(() => import(`../../../${type}/${slug}.mdx`));
};

const Page = ({ params }: { params: { slug: string } }) => {
    const Docs = getDocs(params.slug);
    return (
        <article className="prose my-6">
            <Docs />
        </article>
    );
};

export default Page;
