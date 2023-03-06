"use client";

import React from "react";
import NextImage, { type ImageProps } from "next/image";
import type { AspectRatioProps } from "@radix-ui/react-aspect-ratio";

import { classNames } from "@/lib/classNames";
import { blurDataURL } from "@/lib/constants";
import { AspectRatio } from "@/components/ui/AspectRatio";

type Props = {
    imageProps: ImageProps;
    aspectRatioProps: AspectRatioProps;
};

const Image = ({
    imageProps: { className: imageClassName, ...imageProps },
    aspectRatioProps: { ratio, ...aspectRatioProps },
}: Props) => {
    return (
        <AspectRatio
            ratio={ratio}
            {...aspectRatioProps}>
            <NextImage
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                className={classNames(
                    "rounded-md object-cover",
                    imageClassName
                )}
                {...imageProps}
            />
        </AspectRatio>
    );
};

export default Image;
