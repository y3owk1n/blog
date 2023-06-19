import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

import { linkedInProfile } from "@/lib/constants";
import { firstThreePosts } from "@/lib/contentlayerApi";
import { experiences } from "@/lib/experiences";
import { projects } from "@/lib/projects";
import CoverImage from "@/components/CoverImage";
import TraworldHover from "@/components/TraworldHover";
import { Badge } from "@/components/ui/Badge";
import { LinkTag } from "@/components/ui/typography/LinkTag";

const Page = () => {
    return (
        <>
            <section className="space-y-4">
                <h2
                    id="about"
                    className="scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    About
                </h2>
                <p className="text-justify">
                    Hi there! I&apos;m a 31-year-old technology enthusiast
                    who&apos;s currently single. I have a real passion for
                    combining marketing and technology to create amazing
                    experiences that drive results. Over the past six years,
                    I&apos;ve been working in the data-driven Growth and Digital
                    Marketing world, and I&apos;ve helped to drive revenue
                    growth across a range of industries. Most recently,
                    I&apos;ve been working with <TraworldHover />, a
                    fast-growing Malaysia-based Travel E-Commerce startup.
                </p>
                <p className="text-justify">
                    My approach to marketing is to take a full-funnel and
                    holistic view of things. I use marketing technology,
                    automation, and analytics to optimize the customer
                    experience throughout their entire lifecycle. This allows me
                    to deliver 1:1 hyper-personalized campaigns at scale.
                </p>
                <p className="text-justify">
                    As part of my work, I lead the marketing team that&apos;s
                    focused on driving incremental and continual improvements.
                    We&apos;re always experimenting to improve key metrics like
                    LTV, CAC, ROAS, Products Per Customer, Retention, and more.
                    It&apos;s a challenging and exciting field, and I love every
                    minute of it!
                </p>
                <p className="text-justify">
                    When I&apos;m not working, I&apos;m usually indulging in my
                    creative pursuits. I&apos;m really passionate about music,
                    singing, and programming.
                </p>
                <p className="text-justify">
                    There&apos;s something about building for the web that I
                    find incredibly rewarding. Whether it&apos;s starting with a
                    simple HTML file or working on a complex Next.js
                    application, there&apos;s always a sense of excitement and
                    possibility. That&apos;s because the web is such an amazing
                    platform.
                </p>
            </section>

            <section className="space-y-4">
                <h2
                    id="experiences"
                    className="mb-10 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Experiences
                </h2>
                <ol className="group/container">
                    {experiences.map((experience) => (
                        <li
                            key={experience.position}
                            className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 ">
                            <a
                                href={experience.link}
                                className="group/list relative grid rounded sm:grid-cols-12 md:gap-4 ">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md"></span>
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-4"
                                    aria-label={experience.date}>
                                    {experience.date}
                                </header>
                                <div className="z-10 space-y-4 sm:col-span-8">
                                    <div className="space-y-2">
                                        <p className="font-medium leading-snug text-foreground">
                                            {experience.position}
                                        </p>
                                        <p className="text-justify">
                                            {experience.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline">
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
                    rel="noreferrer">
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
                    {projects.map((project) => (
                        <li
                            key={project.name}
                            className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 ">
                            <a
                                href={project.link}
                                className="group/list relative grid rounded sm:grid-cols-12 md:gap-4 ">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md"></span>
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-4"
                                    aria-label={project.name}>
                                    <CoverImage
                                        title={project.name}
                                        src={project.image}
                                    />
                                </header>
                                <div className="z-10 space-y-4 sm:col-span-8">
                                    <div className="space-y-2">
                                        <p className="font-medium leading-snug text-foreground">
                                            {project.name}
                                        </p>
                                        <p className="text-justify">
                                            {project.description}
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

                <Link
                    className="group flex items-center gap-2 font-medium text-foreground"
                    href="/posts">
                    <span
                        className={twMerge(
                            "transition-all group-hover:underline group-hover:underline-offset-4 "
                        )}>
                        More Posts
                    </span>
                </Link>
            </section>
        </>
    );
};

export default Page;
