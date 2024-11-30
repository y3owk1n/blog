import { cn } from "@/utils/cn";
import type React from "react";

function Code({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
	return (
		<code
			{...props}
			className={cn(
				"relative rounded bg-background px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
				className,
			)}
		/>
	);
}

export { Code };
