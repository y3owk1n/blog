import { cn } from "@/utils/cn";
import type React from "react";

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
