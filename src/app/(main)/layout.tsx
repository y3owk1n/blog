import CustomCursor from "@/components/custom-cursor";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SkipToContent from "@/components/skip-to-content";
import { siteConfig } from "@/lib/config";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { getBaseUrl } from "@/utils/get-base-url";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import RootProviders from "./root-providers";

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: `${siteConfig.name} - Digital Marketer, Web Developer.`,
		template: `%s - ${siteConfig.name} - Digital Marketer, Web Developer.`,
	},
	description: siteConfig.description,
	keywords: [
		"Digital Marketing",
		"Web Development",
		"Programming",
		"Portfolia",
		"Kyle Wong",
	],
	authors: [
		{
			name: siteConfig.name,
			url: siteConfig.url,
		},
	],
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
	creator: "kyle",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: getBaseUrl(siteConfig.url),
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 628,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
	},
	icons: {
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#274b50",
			},
		],
	},
	manifest: "/site.webmanifest",
	alternates: {
		canonical: getBaseUrl(siteConfig.url),
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const isDev = process.env.NODE_ENV === "development";

	return (
		<>
			{!isDev && (
				<Script
					async
					src="https://5oddwdpyqe.kylewong.my/script.js"
					data-website-id="420ddc93-aa75-44aa-89a8-096469720716"
					strategy="lazyOnload"
				/>
			)}
			<body
				className={cn(
					"min-h-screen scroll-smooth bg-background font-sans text-muted-foreground antialiased",
					fontSans.variable,
				)}
			>
				<RootProviders>
					<CustomCursor />
					<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
						<SkipToContent />
						<div className="lg:flex lg:justify-between lg:gap-4">
							<SiteHeader />

							<main
								id="content"
								className="space-y-32 pt-24 lg:w-1/2 lg:py-24"
							>
								{children}

								<SiteFooter />
							</main>
						</div>
					</div>
				</RootProviders>
			</body>
		</>
	);
}
