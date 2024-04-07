import { DEVDOMAIN, DOMAIN, devEnvironment } from "./constants";

export const siteConfig = {
	name: "Kyle Wong",
	url: devEnvironment ? DEVDOMAIN : DOMAIN,
	ogImage: encodeURI(
		`${
			devEnvironment ? DEVDOMAIN : DOMAIN
		}/api/og-image/Kyle Wong - Digital Marketer, Web Developer.`,
	),
	description:
		"Hello, I'm Kyle, a digital marketer and web developer, based in the Malaysia 🇲.",
	links: {
		github: "https://www.github.com/y3owk1n",
		linkedin: "https://www.linkedin.com/in/kyle-wong-958a58115/",
	},
};
