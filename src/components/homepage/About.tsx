import config from "../../../keystatic.config";
import DocumentRendererWrapper from "../DocumentRendererWrapper";
import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), config);

const About = async () => {
    const aboutData = await reader.singletons.about.read({
        resolveLinkedFiles: true,
    });

    return (
        <section className="space-y-4">
            <h2
                id="about"
                className="scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                About
            </h2>

            {aboutData && aboutData.description && (
                <DocumentRendererWrapper content={aboutData.description} />
            )}
        </section>
    );
};

export default About;
