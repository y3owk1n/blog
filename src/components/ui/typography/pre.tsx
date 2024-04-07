import { cn } from "@/lib/cn";

function Pre({
	className,
	...props
}: React.HTMLAttributes<HTMLPreElement>): JSX.Element {
	return (
		<pre
			{...props}
			className={cn(
				"overflow-x-auto rounded-lg border bg-background px-2 py-4",
				className,
			)}
		/>
	);
}

export { Pre };
