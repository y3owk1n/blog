import { useUncontrolled } from "@/lib/hooks/use-uncontrolled";
import { useMemo } from "react";

/**
 * Function to generate a range of numbers
 * @param  start - The starting number of the range
 * @param  end - The ending number of the range
 * @returns - An array of numbers from start to end
 */
export function range(start: number, end: number): number[] {
	const length = end - start + 1;
	return Array.from({ length }, (_, index) => index + start);
}

export const SEPARATOR = "separator";

export interface PaginationParams {
	/** Page selected on initial render, defaults to 1 */
	initialPage?: number;

	/** Controlled active page number */
	page?: number;

	/** Total amount of pages */
	total: number;

	/** Siblings amount on left/right side of selected page, defaults to 1 */
	siblings?: number;

	/** Amount of elements visible on left/right edges, defaults to 1  */
	boundaries?: number;

	/** Callback fired after change of each page */
	onChange?: (page: number) => void;
}

/**
 * Custom hook to create a pagination component
 * @param  params - The parameters for the pagination
 * @returns  - The pagination range, active page, and functions to control the pagination
 */
export interface PaginationReturn {
	range: (number | "separator")[];
	active: number;
	setPage: (pageNumber: number) => void;
	next: () => void;
	previous: () => void;
	first: () => void;
	last: () => void;
}

export function usePagination({
	total,
	siblings = 1,
	boundaries = 1,
	page,
	initialPage = 1,
	onChange,
}: PaginationParams): PaginationReturn {
	const _total = Math.max(Math.trunc(total), 0);
	const [activePage, setActivePage] = useUncontrolled({
		value: page,
		onChange,
		defaultValue: initialPage,
		finalValue: initialPage,
	});

	function setPage(pageNumber: number): void {
		if (pageNumber <= 0) {
			setActivePage(1);
		} else if (pageNumber > _total) {
			setActivePage(_total);
		} else {
			setActivePage(pageNumber);
		}
	}

	function next(): void {
		setPage(activePage + 1);
	}
	function previous(): void {
		setPage(activePage - 1);
	}
	function first(): void {
		setPage(1);
	}
	function last(): void {
		setPage(_total);
	}

	const paginationRange = useMemo((): (number | "separator")[] => {
		const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
		if (totalPageNumbers >= _total) {
			return range(1, _total);
		}

		const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
		const rightSiblingIndex = Math.min(
			activePage + siblings,
			_total - boundaries,
		);

		const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
		const shouldShowRightDots =
			rightSiblingIndex < _total - (boundaries + 1);

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = siblings * 2 + boundaries + 2;
			return [
				...range(1, leftItemCount),
				SEPARATOR,
				...range(_total - (boundaries - 1), _total),
			];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings;
			return [
				...range(1, boundaries),
				SEPARATOR,
				...range(_total - rightItemCount, _total),
			];
		}

		return [
			...range(1, boundaries),
			SEPARATOR,
			...range(leftSiblingIndex, rightSiblingIndex),
			SEPARATOR,
			...range(_total - boundaries + 1, _total),
		];
	}, [siblings, boundaries, _total, activePage]);

	return {
		range: paginationRange,
		active: activePage,
		setPage,
		next,
		previous,
		first,
		last,
	};
}
