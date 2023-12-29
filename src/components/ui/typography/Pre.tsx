import { cn } from "@/lib/cn";
import React from "react";

const Pre = ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
	return (
		<pre
			{...props}
			className={cn(
				"overflow-x-auto rounded-lg border bg-background px-2 py-4",
				className,
			)}
		/>
	);
};

export { Pre };
