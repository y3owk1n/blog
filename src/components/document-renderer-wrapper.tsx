"use client";

import {
	DocumentRenderer,
	type defaultRenderers,
} from "@keystatic/core/renderer";
import React from "react";
import { ImageWithAspectRatio } from "./ui/image-with-aspect-ratio";
import { Separator } from "./ui/separator";
import { LinkTag } from "./ui/typography/link-tag";

interface RenderersType {
	inline?: Partial<(typeof defaultRenderers)["inline"]>;
	block?: Partial<(typeof defaultRenderers)["block"]>;
}

interface RendererText {
	text: string;
	[key: string]: unknown;
}

type RendererNode = RendererElement | RendererText;

interface RendererElement {
	children: RendererNode[];
	[key: string]: unknown;
}

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

interface DocumentRendererWrapperProps {
	content: RendererElement[];
}

function DocumentRendererWrapper({
	content,
}: DocumentRendererWrapperProps): JSX.Element {
	return (
		<div className="prose prose-a:no-underline prose-img:my-0">
			<DocumentRenderer document={content} renderers={renderers} />
		</div>
	);
}

export default DocumentRendererWrapper;
