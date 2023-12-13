import React from "react";
import { twMerge } from "tailwind-merge";

const Code = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
	return (
		<code
			{...props}
			className={twMerge(
				"relative rounded bg-background px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
				className,
			)}
		/>
	);
};

export { Code };
