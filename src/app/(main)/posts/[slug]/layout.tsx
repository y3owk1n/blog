import { siteConfig } from "@/lib/config";
import { generateCustomMetadata } from "@/utils/generate-custom-metadata";
import { createReader } from "@keystatic/core/reader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import config from "../../../../../keystatic.config";

const reader = createReader(process.cwd(), config);

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await reader.collections.posts.read(params.slug, {
		resolveLinkedFiles: true,
	});
	//
	if (!post) return notFound();

	const title = post.title;
	const description = post.description;
	const slug = `/posts/${params.slug}`;
	const image = encodeURI(`${siteConfig.url}/api/og-image/${post.title}`);
	return generateCustomMetadata({
		mainTitle: title,
		maybeSeoTitle: title,
		maybeSeoDescription: description,
		ogImage: image,
		slug,
	});
}

interface PostLayoutProps {
	children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps): JSX.Element {
	return (
		<div className="">
			<article className="space-y-6">{children}</article>
		</div>
	);
}
