import { siteConfig } from "@/lib/config";
import { cn } from "@/utils/cn";
import { generateCustomMetadata } from "@/utils/generate-custom-metadata";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { createReader } from "@keystatic/core/reader";
import dayjs from "dayjs";
import Link from "next/link";
import config from "../../../../keystatic.config";

// export const runtime = "edge";

const title = "Post List";
const description = "A list for all my blogs and sharings";
const image = encodeURI(
	`${siteConfig.url}/api/og-image/A list for all my blogs and sharings`,
);
const slug = "/posts";

export const metadata = generateCustomMetadata({
	mainTitle: title,
	maybeSeoTitle: title,
	maybeSeoDescription: description,
	ogImage: image,
	slug,
});

const reader = createReader(process.cwd(), config);

async function Page(): Promise<JSX.Element> {
	const postsData = await reader.collections.posts.all();

	const sortedPostsData = postsData.sort((a, b) =>
		dayjs(b.entry.date).diff(dayjs(a.entry.date)),
	);
	return (
		<section id="posts" className="space-y-4">
			<Link
				className="group mb-10 flex items-center gap-2 font-medium text-foreground"
				href="/"
			>
				<ChevronLeftIcon className="h-4 w-4" />
				<span
					className={cn(
						"transition-all group-hover:underline group-hover:underline-offset-4",
					)}
				>
					Back
				</span>
			</Link>

			<h2 className="sr-only">Posts</h2>
			<ol className="group/container">
				{sortedPostsData.map((post) => (
					<li
						key={post.slug}
						className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50"
					>
						<Link
							href={`/posts/${post.slug}`}
							className="group/list relative grid rounded"
						>
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md" />
							<div className="z-10 space-y-4">
								<div className="space-y-2">
									<p className="font-medium leading-snug text-foreground">
										{post.entry.title}
									</p>
									<p className="text-justify">
										{post.entry.description}
									</p>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ol>
		</section>
	);
}

export default Page;
