import PublishedDate from "@/components/Date";
import DocumentRendererWrapper from "@/components/DocumentRendererWrapper";
import { cn } from "@/lib/cn";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { createReader } from "@keystatic/core/reader";
import Link from "next/link";
import { notFound } from "next/navigation";
import config from "../../../../../keystatic.config";

interface PageProps {
	params: {
		slug: string;
	};
}

const reader = createReader(process.cwd(), config);

export async function generateStaticParams(): Promise<PageProps["params"][]> {
	const allPostsSlug = await reader.collections.posts.list();

	return allPostsSlug.map((content) => ({
		slug: content,
	}));
}

export default async function Page({ params }: PageProps) {
	const slug = params.slug;
	const post = await reader.collections.posts.read(slug, {
		resolveLinkedFiles: true,
	});

	if (!post) {
		return notFound();
	}

	return (
		<>
			<Link
				className="group mb-10 flex items-center gap-2 font-medium text-foreground"
				href="/posts"
			>
				<ChevronLeftIcon className="h-4 w-4" />
				<span
					className={cn(
						"transition-all group-hover:underline group-hover:underline-offset-4 ",
					)}
				>
					Back
				</span>
			</Link>
			<h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
				{post.title}
			</h3>
			{post.date && (
				<div className="my-4 text-sm text-muted-foreground">
					<PublishedDate dateString={post.date} />
				</div>
			)}

			<DocumentRendererWrapper content={post.content} />
		</>
	);
}
