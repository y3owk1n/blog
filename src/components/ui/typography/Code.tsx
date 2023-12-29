import { cn } from "@/lib/cn";
import React from "react";

const Code = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
	return (
		<code
			{...props}
			className={cn(
				"relative rounded bg-background px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
				className,
			)}
		/>
	);
};

export { Code };
