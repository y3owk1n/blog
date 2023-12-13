/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || "https://www.kylewong.my",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
	sitemapSize: 1000,
};

export default config;
