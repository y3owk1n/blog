import { siteConfig } from "@/lib/config";
import { type Metadata } from "next";
import { getBaseUrl } from "./get-base-url";

export function generateCustomMetadata({
	mainTitle,
	maybeSeoTitle,
	maybeSeoDescription,
	slug,
	ogImage,
	ogImageAlt,
	disallowRobotIndex = false,
}: {
	mainTitle: string;
	maybeSeoTitle: string;
	maybeSeoDescription: string;
	slug: string;
	ogImage?: string;
	ogImageAlt?: string;
	disallowRobotIndex?: boolean;
}): Metadata {
	let robotsMeta: Metadata["robots"] = {
		index: true,
		follow: true,
		nocache: false,
	};

	if (disallowRobotIndex) {
		robotsMeta = {
			index: false,
			follow: false,
			nocache: true,
			noarchive: true,
			nosnippet: true,
			noimageindex: true,
			notranslate: true,
			nositelinkssearchbox: true,
			"max-snippet": -1,
			"max-image-preview": "none",
			"max-video-preview": -1,
		};
	}

	return {
		title: mainTitle,
		description: maybeSeoDescription,
		openGraph: {
			type: "website",
			locale: "en_US",
			url: siteConfig.url,
			title: maybeSeoTitle,
			description: maybeSeoDescription,
			images: [
				{
					url: ogImage ?? siteConfig.ogImage,
					width: 1200,
					height: 628,
					alt: ogImageAlt ?? siteConfig.name,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: maybeSeoTitle,
			description: maybeSeoDescription,
			images: [ogImage ?? siteConfig.ogImage],
		},
		alternates: {
			canonical: getBaseUrl(siteConfig.url, slug),
		},
		robots: robotsMeta,
	};
}
