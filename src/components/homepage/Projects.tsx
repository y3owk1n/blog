import config from "../../../keystatic.config";
import CoverImage from "@/components/CoverImage";
import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), config);

const Projects = async () => {
    const projectsData = await reader.collections.projects.all();

    return (
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
    );
};

export default Projects;
