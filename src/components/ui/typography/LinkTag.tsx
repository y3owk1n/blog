import { twMerge } from "tailwind-merge";

const LinkTag = ({
	className,
	children,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<a
			{...props}
			className={twMerge(
				"group font-medium text-foreground transition-all duration-300 ease-in-out",
			)}
		>
			<span
				className={twMerge(
					"w-fit bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]",
					className,
				)}
			>
				{children}
			</span>
		</a>
	);
};

export { LinkTag };
