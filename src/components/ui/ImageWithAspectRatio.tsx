"use client";

import { AspectRatio } from "@/components/ui/AspectRatio";
import { cn } from "@/lib/cn";
import { blurDataURL } from "@/lib/constants";
import type { AspectRatioProps } from "@radix-ui/react-aspect-ratio";
import NextImage, { type ImageProps } from "next/image";
import React from "react";

type Props = {
	imageProps: ImageProps;
	aspectRatioProps?: AspectRatioProps;
};

const ImageWithAspectRatio = ({
	imageProps: { className: imageClassName, ...imageProps },
	aspectRatioProps,
}: Props) => {
	return (
		<AspectRatio ratio={aspectRatioProps?.ratio} {...aspectRatioProps}>
			<NextImage
				fill
				placeholder="blur"
				blurDataURL={blurDataURL}
				className={cn("rounded-md object-cover", imageClassName)}
				{...imageProps}
			/>
		</AspectRatio>
	);
};

export { ImageWithAspectRatio };
