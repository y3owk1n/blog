import { Badge } from "@/components/ui/badge";
import { LinkTag } from "@/components/ui/typography/link-tag";
import { siteConfig } from "@/lib/config";
import { formatDateRange } from "@/utils/dates";
import { createReader } from "@keystatic/core/reader";
import dayjs from "dayjs";
import { TbExternalLink } from "react-icons/tb";
import config from "../../../keystatic.config";

const reader = createReader(process.cwd(), config);

async function Experiences(): Promise<JSX.Element> {
	const experiencesData = await reader.collections.experiences.all();

	const sortedExperiencesDataByDate = experiencesData.sort((a, b) =>
		dayjs(b.entry.startDate).diff(dayjs(a.entry.startDate)),
	);

	return (
		<section className="space-y-4">
			<h2
				id="experiences"
				className="mb-10 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
			>
				Experiences
			</h2>
			<ol className="group/container">
				{sortedExperiencesDataByDate.map((experience) => (
					<li
						key={experience.slug}
						className="mb-12 transition-all duration-100 lg:hover:!opacity-100 lg:group-hover/container:opacity-50 "
					>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href={experience.entry.link ?? undefined}
							className="group/list relative grid rounded sm:grid-cols-12 md:gap-4 "
						>
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition-all md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover/list:bg-foreground/5 lg:group-hover/list:backdrop-blur-md" />
							<header
								className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-4"
								aria-label={formatDateRange(
									experience.entry.startDate,
									experience.entry.endDate.value,
								)}
							>
								{formatDateRange(
									experience.entry.startDate,
									experience.entry.endDate.value,
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
										<Badge key={tag} variant="secondary">
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
				href={siteConfig.links.linkedin}
				target="_blank"
				rel="noreferrer noopener"
			>
				View More at LinkedIn
				<TbExternalLink className="h-4 w-4 transition-all duration-100 group-hover:translate-x-4" />
			</LinkTag>
		</section>
	);
}
export default Experiences;
