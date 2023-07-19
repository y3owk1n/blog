import config from "../../../keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

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
                <div className="prose text-justify">
                    <DocumentRenderer document={aboutData.description} />
                </div>
            )}
        </section>
    );
};

export default About;
