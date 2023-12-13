import React from "react";
import { twMerge } from "tailwind-merge";

const Pre = ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
	return (
		<pre
			{...props}
			className={twMerge(
				"overflow-x-auto rounded-lg border bg-background px-2 py-4",
				className,
			)}
		/>
	);
};

export { Pre };
