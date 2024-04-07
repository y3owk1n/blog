import { cn } from "@/lib/cn";
import { type HTMLAttributes } from "react";

interface ListProps
	extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
	variant?: "unordered" | "ordered";
}

function List({
	variant = "unordered",
	className,
	...props
}: ListProps): JSX.Element {
	const isUl = variant === "unordered";
	const isOl = variant === "ordered";

	return (
		<ul
			{...props}
			className={cn(
				"ml-6 list-disc [&>li]:mt-2",
				isUl && "list-disc",
				isOl && "list-decimal",
				className,
			)}
		/>
	);
}

export { List };
