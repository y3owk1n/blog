import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { AspectRatio } from "./ui/AspectRatio";

type Props = {
    title: string;
    src: string;
    slug?: string;
    isEager?: boolean;
};

const CoverImage = ({ title, src, slug, isEager = false }: Props) => {
    const image2 = (
        <AspectRatio ratio={2 / 1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                loading={isEager ? "eager" : "lazy"}
                className={twMerge(
                    "rounded-md object-cover",
                    "rounded-lg shadow-sm ",
                    slug && "transition-shadow duration-200 hover:shadow-lg"
                )}
                alt={`Cover Image for ${title}`}
                src={src}
            />
        </AspectRatio>
    );

    return (
        <div className="pb-4 sm:mx-0">
            {slug ? (
                <Link
                    href={slug}
                    passHref
                    aria-label={title}>
                    {image2}
                </Link>
            ) : (
                image2
            )}
        </div>
    );
};

export default CoverImage;
