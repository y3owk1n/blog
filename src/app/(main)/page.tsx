import About from "@/components/homepage/about";
import Experiences from "@/components/homepage/experiences";
import Posts from "@/components/homepage/posts";
import Projects from "@/components/homepage/projects";

function Page(): JSX.Element {
	return (
		<>
			<About />
			<Experiences />
			<Projects />
			<Posts />
		</>
	);
}

export default Page;
