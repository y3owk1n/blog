import About from "@/components/homepage/About";
import Experiences from "@/components/homepage/Experiences";
import Posts from "@/components/homepage/Posts";
import Projects from "@/components/homepage/Projects";

export const metadata = {
	alternates: {
		canonical: "/",
	},
};

const Page = () => {
	return (
		<>
			<About />
			<Experiences />
			<Projects />
			<Posts />
		</>
	);
};

export default Page;
