import { cn } from "@/lib/cn";
import React from "react";

const Blockquote = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	return (
		<blockquote
			{...props}
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
		/>
	);
};

export { Blockquote };
