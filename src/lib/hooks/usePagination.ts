import { useMemo } from "react";
import { useUncontrolled } from "@/lib/hooks/useUncontrolled";

/**
 * Function to generate a range of numbers
 * @param {number} start - The starting number of the range
 * @param {number} end - The ending number of the range
 * @returns {number[]} - An array of numbers from start to end
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
 * @param {PaginationParams} params - The parameters for the pagination
 * @returns {PaginationReturn} - The pagination range, active page, and functions to control the pagination
 */
export interface PaginationReturn {
    range: Array<number | "separator">;
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

    const setPage = (pageNumber: number) => {
        if (pageNumber <= 0) {
            setActivePage(1);
        } else if (pageNumber > _total) {
            setActivePage(_total);
        } else {
            setActivePage(pageNumber);
        }
    };

    const next = () => setPage(activePage + 1);
    const previous = () => setPage(activePage - 1);
    const first = () => setPage(1);
    const last = () => setPage(_total);

    const paginationRange = useMemo((): (number | "separator")[] => {
        const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
        if (totalPageNumbers >= _total) {
            return range(1, _total);
        }

        const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
        const rightSiblingIndex = Math.min(
            activePage + siblings,
            _total - boundaries
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
