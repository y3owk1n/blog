import { cn } from "@/lib/cn";
import React from "react";

function Blockquote({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
	return (
		<blockquote
			{...props}
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
		/>
	);
}

export { Blockquote };
