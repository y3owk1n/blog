import { githubProfile, githubRepo } from "@/lib/constants";
import React from "react";

const SiteFooter = () => {
	return (
		<footer>
			<p className="text-center text-sm leading-loose md:text-left">
				Built by{" "}
				<a
					href={githubProfile}
					target="_blank"
					rel="noreferrer noopener"
					className="group font-medium text-foreground transition-all duration-300 ease-in-out "
				>
					<span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
						Kyle
					</span>
				</a>
				. Hosted on{" "}
				<a
					href="https://vercel.com"
					target="_blank"
					rel="noreferrer noopener"
					className="group font-medium text-foreground transition-all duration-300 ease-in-out "
				>
					<span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
						Vercel
					</span>
				</a>
				. The source code is available on{" "}
				<a
					href={githubRepo}
					target="_blank"
					rel="noreferrer noopener"
					className="group font-medium text-foreground transition-all duration-300 ease-in-out "
				>
					<span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
						GitHub
					</span>
				</a>
				.
			</p>
		</footer>
	);
};

export default SiteFooter;
