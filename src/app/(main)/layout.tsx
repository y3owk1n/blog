import CustomCursor from "@/components/CustomCursor";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SkipToContent from "@/components/SkipToContent";
import { DEVDOMAIN, DOMAIN, devEnvironment } from "@/lib/constants";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import RootProviders from "./RootProviders.client";
import { cn } from "@/lib/cn";

const title = "Kyle Wong - Digital Marketer, Web Developer.";
const description = `Hello, I'm Kyle, a digital marketer and web developer, based in the Malaysia 🇲🇾.`;
const image = encodeURI(
	`${
		devEnvironment ? DEVDOMAIN : DOMAIN
	}/api/og-image/Kyle Wong - Digital Marketer, Web Developer.`,
);

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL("https://kylewong.my"),
	title,
	description,
	keywords: [
		"Digital Marketing",
		"Web Development",
		"Programming",
		"Portfolia",
		"Kyle Wong",
	],
	authors: [
		{
			name: "kyle",
			url: "https://kylewong.my",
		},
	],
	creator: "kyle",
	openGraph: {
		title,
		description,
		url: DOMAIN,
		siteName: title,
		images: [image],
		locale: "en-US",
		type: "website",
	},
	icons: {
		icon: [
			{
				url: "/favicon/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
		shortcut: ["/favicon/favicon.ico"],
		apple: [
			{
				url: "/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		other: [
			{
				rel: "mask-icon",
				url: "/favicon/safari-pinned-tab.svg",
			},
		],
	},
	manifest: "/favicon/site.webmanifest",
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [image],
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
}) {
	const isDev = process.env.NODE_ENV === "development";

	return (
		<>
			{!isDev && (
				<Script
					async
					src={"https://5oddwdpyqe.kylewong.my/umami.js"}
					data-website-id="2732127c-366b-4a69-8067-b750b856bbd4"
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
