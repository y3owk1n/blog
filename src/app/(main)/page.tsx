import Link from "next/link";
import config from "../../../keystatic.config";
import CoverImage from "@/components/CoverImage";
import { Badge } from "@/components/ui/Badge";
import { LinkTag } from "@/components/ui/typography/LinkTag";
import { linkedInProfile } from "@/lib/constants";
import { formatDateRange } from "@/lib/dates";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";
import dayjs from "dayjs";
import { TbExternalLink } from "react-icons/tb";

const reader = createReader(process.cwd(), config);

export const metadata = {
    alternates: {
        canonical: "/",
    },
};

const Page = async () => {
    const aboutData = await reader.singletons.about.read({
        resolveLinkedFiles: true,
    });
    const experiencesData = await reader.collections.experiences.all();

    const sortedExperiencesDataByDate = experiencesData.sort((a, b) =>
        dayjs(b.entry.startDate).diff(dayjs(a.entry.startDate))
    );

    const projectsData = await reader.collections.projects.all();

    const postsData = await reader.collections.posts.all();

    const sortedPostsData = postsData.sort((a, b) =>
        dayjs(b.entry.date).diff(dayjs(a.entry.date))
    );

    const firstThreePosts = sortedPostsData.slice(0, 3);

    return (
        <>
            <section className="space-y-4">
                <h2
                    id="about"
                    className="scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    About
                </h2>

                {aboutData && aboutData.description && (
                    <div className="prose text-justify">
                        <DocumentRenderer document={aboutData.description} />
                    </div>
                )}
            </section>

            <section className="space-y-4">
                <h2
                    id="experiences"
                    className="mb-10 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Experiences
                </h2>
                <ol className="group/container">
                    {sortedExperiencesDataByDate.map((experience) => (
                        <li
                            key={experience.slug}
                            className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 ">
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href={experience.entry.link ?? undefined}
                                className="group/list relative grid rounded sm:grid-cols-12 md:gap-4 ">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md"></span>
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-4"
                                    aria-label={formatDateRange(
                                        experience.entry.startDate,
                                        experience.entry.endDate.value
                                    )}>
                                    {formatDateRange(
                                        experience.entry.startDate,
                                        experience.entry.endDate.value
                                    )}
                                </header>
                                <div className="z-10 space-y-4 sm:col-span-8">
                                    <div className="space-y-2">
                                        <p className="font-medium leading-snug text-foreground">
                                            {experience.entry.title}
                                        </p>
                                        <p className="text-justify">
                                            {experience.entry.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.entry.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ol>

                <LinkTag
                    className="flex items-center gap-2"
                    href={linkedInProfile}
                    target="_blank"
                    rel="noreferrer noopener">
                    View More at LinkedIn
                    <TbExternalLink className="h-4 w-4 transition-all duration-100 group-hover:translate-x-4" />
                </LinkTag>
            </section>
            <section className="space-y-4">
                <h2
                    id="projects"
                    className="mb-10 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Projects
                </h2>
                <ol className="group/container">
                    {projectsData.map((project) => (
                        <li
                            key={project.slug}
                            className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 ">
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href={project.entry.link ?? undefined}
                                className="group/list relative grid rounded sm:grid-cols-12 md:gap-4 ">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md"></span>
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-4"
                                    aria-label={project.entry.name}>
                                    {project.entry.image && (
                                        <CoverImage
                                            title={project.entry.name}
                                            src={project.entry.image}
                                        />
                                    )}
                                </header>
                                <div className="z-10 space-y-4 sm:col-span-8">
                                    <div className="space-y-2">
                                        <p className="font-medium leading-snug text-foreground">
                                            {project.entry.name}
                                        </p>
                                        <p className="text-justify">
                                            {project.entry.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="space-y-4">
                <h2
                    id="posts"
                    className="mb-10 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Posts
                </h2>
                <ol className="group/container">
                    {firstThreePosts.map((post) => (
                        <li
                            key={post.slug}
                            className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 ">
                            <Link
                                href={`/posts/${post.slug}`}
                                className="group/list relative grid rounded ">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md"></span>
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
                    href="/posts">
                    <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                        More Posts
                    </span>
                </Link>
            </section>
        </>
    );
};

export default Page;
