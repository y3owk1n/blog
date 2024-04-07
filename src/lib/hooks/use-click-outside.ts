import type React from "react";
import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside of a given element
 * @param  ref - The reference to the element
 * @param  handler - The function to be called when a click outside of the element is detected
 */
export default function useOnClickOutside(
	ref: React.RefObject<HTMLDivElement>,
	handler: (e?: MouseEvent | TouchEvent) => void,
): void {
	useEffect(() => {
		function listener(event: MouseEvent | TouchEvent): void {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}

			handler(event);
		}

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}
