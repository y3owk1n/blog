// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
import withMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        mdxRs: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
export default withMDX()(config);
