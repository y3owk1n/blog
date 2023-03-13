import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { ImageWithAspectRatio } from "@/components/ui/ImageWithAspectRatio";

type Props = {
    title: string;
    src: string;
    slug?: string;
    isEager?: boolean;
};

const CoverImage = ({ title, src, slug, isEager = false }: Props) => {
    const image = (
        <ImageWithAspectRatio
            aspectRatioProps={{
                ratio: 2 / 1,
            }}
            imageProps={{
                className: twMerge(
                    "rounded-lg shadow-sm ",
                    slug && "transition-shadow duration-200 hover:shadow-lg"
                ),
                loading: isEager ? "eager" : "lazy",
                alt: `Cover Image for ${title}`,
                src: src,
            }}
        />
    );
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link
                    href={slug}
                    passHref
                    aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
};

export default CoverImage;
