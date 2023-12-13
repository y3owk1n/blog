import { createReader } from "@keystatic/core/reader";
import dayjs from "dayjs";
import Link from "next/link";
import config from "../../../keystatic.config";

const reader = createReader(process.cwd(), config);

const Posts = async () => {
	const postsData = await reader.collections.posts.all();

	const sortedPostsData = postsData.sort((a, b) =>
		dayjs(b.entry.date).diff(dayjs(a.entry.date)),
	);

	const firstThreePosts = sortedPostsData.slice(0, 3);

	return (
		<section className="space-y-4">
			<h2
				id="posts"
				className="mb-10 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
			>
				Posts
			</h2>
			<ol className="group/container">
				{firstThreePosts.map((post) => (
					<li
						key={post.slug}
						className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 "
					>
						<Link
							href={`/posts/${post.slug}`}
							className="group/list relative grid rounded "
						>
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md" />
							<div className="z-10 space-y-4 ">
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

			<Link
				className="group font-medium text-foreground transition-all duration-300 ease-in-out "
				href="/posts"
			>
				<span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
					More Posts
				</span>
			</Link>
		</section>
	);
};

export default Posts;
