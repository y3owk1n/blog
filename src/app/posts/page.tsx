import Link from "next/link";
import { DEVDOMAIN, devEnvironment, DOMAIN } from "@/lib/constants";
import { allPostsAndSort } from "@/lib/contentlayerApi";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

const title = "Post List | Kyle Wong";
const description = `A list for all my blogs and sharings`;
const image = encodeURI(
    `${
        devEnvironment ? DEVDOMAIN : DOMAIN
    }/api/og-image/A list for all my blogs and sharings`
);

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: DOMAIN,
        siteName: title,
        images: [image],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
    },
};

const Page = () => {
    return (
        <>
            <section
                id="posts"
                className="space-y-4">
                <Link
                    className="group mb-10 flex items-center gap-2 font-medium text-foreground"
                    href="/">
                    <ChevronLeftIcon className="h-4 w-4" />
                    <span
                        className={twMerge(
                            "transition-all group-hover:underline group-hover:underline-offset-4 "
                        )}>
                        Back
                    </span>
                </Link>

                <h2 className="sr-only">Posts</h2>
                <ol className="group/container">
                    {allPostsAndSort.map((post) => (
                        <li
                            key={post.slug}
                            className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 ">
                            <Link
                                href={post.href}
                                className="group/list relative grid rounded ">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md"></span>
                                <div className="z-10 space-y-4 ">
                                    <div className="space-y-2">
                                        <p className="font-medium leading-snug text-foreground">
                                            {post.title}
                                        </p>
                                        <p className="text-justify">
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
};

export default Page;
