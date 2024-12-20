"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const nav = [
	{ fragment: "#about", label: "About" },
	{ fragment: "#experiences", label: "Experiences" },
	{ fragment: "#projects", label: "Projects" },
	{ fragment: "#posts", label: "Posts" },
];

function SiteNav(): JSX.Element {
	const [hash, setHash] = useState("");
	const params = useParams();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setHash(window.location.hash);
	}, [params]);

	return (
		<nav className="hidden lg:block" aria-label="In-page jump links">
			<ul className="mt-16 grid gap-4">
				{nav.map((item) => (
					<li key={item.fragment}>
						<Link
							className="group font-medium text-foreground transition-all duration-300 ease-in-out"
							href={`/${item.fragment}`}
						>
							<span
								className={cn(
									"bg-gradient-to-r from-muted-foreground to-muted-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 text-muted-foreground transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]",
									hash === item.fragment &&
										"from-foreground to-foreground text-foreground",
								)}
							>
								{item.label}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default SiteNav;
