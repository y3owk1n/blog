import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
	extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
	variant?: "unordered" | "ordered";
}

const List = ({ variant = "unordered", className, ...props }: Props) => {
	const isUl = variant === "unordered";
	const isOl = variant === "ordered";

	return (
		<ul
			{...props}
			className={twMerge(
				"ml-6 list-disc [&>li]:mt-2",
				isUl && "list-disc",
				isOl && "list-decimal",
				className,
			)}
		/>
	);
};

export { List };
