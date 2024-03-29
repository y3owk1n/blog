await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	swcMinify: true,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.kylewong.my",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default config;
