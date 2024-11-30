"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import type * as React from "react";
import { TbDeviceLaptop } from "react-icons/tb";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function DarkModeToggle(): React.JSX.Element {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm">
					<SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => {
						setTheme("light");
					}}
				>
					<SunIcon className="mr-2 h-4 w-4" />
					<span>Light</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						setTheme("dark");
					}}
				>
					<MoonIcon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						setTheme("system");
					}}
				>
					<TbDeviceLaptop className="mr-2 h-4 w-4" />
					<span>System</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default DarkModeToggle;
