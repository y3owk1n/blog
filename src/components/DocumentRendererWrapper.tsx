"use client";

import {
	DocumentRenderer,
	type defaultRenderers,
} from "@keystatic/core/renderer";
import React from "react";
import { ImageWithAspectRatio } from "./ui/ImageWithAspectRatio";
import { Separator } from "./ui/Separator";
import { LinkTag } from "./ui/typography/LinkTag";

type RenderersType = {
	inline?: Partial<(typeof defaultRenderers)["inline"]>;
	block?: Partial<(typeof defaultRenderers)["block"]>;
};

type RendererText = {
	text: string;
	[key: string]: unknown;
};

type RendererNode = RendererElement | RendererText;

type RendererElement = {
	children: RendererNode[];
	[key: string]: unknown;
};

const renderers: RenderersType = {
	inline: {
		link(props) {
			return (
				<LinkTag
					href={props.href}
					target="_blank"
					rel="noreferrer noopener"
				>
					{props.children}
				</LinkTag>
			);
		},
	},
	block: {
		divider() {
			return <Separator className="my-4 md:my-8" />;
		},
		image(props) {
			return (
				<ImageWithAspectRatio
					aspectRatioProps={{
						ratio: 16 / 9,
					}}
					imageProps={{
						alt: props.alt || "",
						src: props.src || "",
					}}
				/>
			);
		},
	},
};

interface Props {
	content: RendererElement[];
}

const DocumentRendererWrapper = ({ content }: Props) => {
	return (
		<div className="prose prose-a:no-underline prose-img:my-0">
			<DocumentRenderer document={content} renderers={renderers} />
		</div>
	);
};

export default DocumentRendererWrapper;
