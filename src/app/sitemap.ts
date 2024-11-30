import type { MetadataRoute } from "next";
import config from "../../keystatic.config";

import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), config);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const dateNow = new Date();

	const postsData = await reader.collections.posts.all();

	const posts = postsData.map((post) => ({
		url: `https://www.kylewong.my/posts/${post.slug}`,
		lastModified: post.entry.date ? new Date(post.entry.date) : new Date(),
	}));

	return [
		{
			url: "https://www.kylewong.my",
			lastModified: dateNow,
		},
		...posts,
	];
}
