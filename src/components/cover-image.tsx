import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

interface CoverImageProps {
	title: string;
	src: string;
	slug?: string;
	isEager?: boolean;
}

function CoverImage({
	title,
	src,
	slug,
	isEager = false,
}: CoverImageProps): JSX.Element {
	const image = (
		<AspectRatio ratio={2 / 1}>
			<Image
				fill
				loading={isEager ? "eager" : "lazy"}
				className={cn(
					"object-cover",
					"rounded-md shadow-sm",
					slug && "transition-shadow duration-200 hover:shadow-lg",
				)}
				alt={`Cover Image for ${title}`}
				src={src}
			/>
		</AspectRatio>
	);

	return (
		<div className="pb-4 sm:mx-0">
			{slug ? (
				<Link href={slug} passHref aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
}

export default CoverImage;
