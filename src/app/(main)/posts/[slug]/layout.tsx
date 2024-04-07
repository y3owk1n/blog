import { DEVDOMAIN, DOMAIN, devEnvironment } from "@/lib/constants";
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

	const title = `${post.title} | Kyle's Blog`;
	const description = post.description;
	const image = encodeURI(
		`${devEnvironment ? DEVDOMAIN : DOMAIN}/api/og-image/${post.title}`,
	);
	const date = post.date
		? new Date(post.date).toISOString()
		: new Date().toISOString();

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `${DOMAIN}/posts/${params.slug}`,
			siteName: title,
			images: [image],
			locale: "en-US",
			type: "article",
			publishedTime: date,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
	};
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
