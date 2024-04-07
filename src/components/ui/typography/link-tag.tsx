import { cn } from "@/lib/cn";

function LinkTag({
	className,
	children,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
	return (
		<a
			{...props}
			className={cn(
				"group font-medium text-foreground transition-all duration-300 ease-in-out",
			)}
		>
			<span
				className={cn(
					"w-fit bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]",
					className,
				)}
			>
				{children}
			</span>
		</a>
	);
}

export { LinkTag };
