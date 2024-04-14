import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Function to merge Tailwind classes
 * @param  inputs - Array of Tailwind classes
 * @returns  - Merged Tailwind classes
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
