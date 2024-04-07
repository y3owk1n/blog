import { createReader } from "@keystatic/core/reader";
import config from "../../../keystatic.config";
import DocumentRendererWrapper from "../document-renderer-wrapper";

const reader = createReader(process.cwd(), config);

async function About(): Promise<JSX.Element> {
	const aboutData = await reader.singletons.about.read({
		resolveLinkedFiles: true,
	});

	return (
		<section className="space-y-4">
			<h2
				id="about"
				className="scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
			>
				About
			</h2>

			{aboutData?.description ? (
				<DocumentRendererWrapper content={aboutData.description} />
			) : null}
		</section>
	);
}

export default About;
