"use client";

import React from "react";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { BsThreeDots } from "react-icons/bs";

import {
    usePagination,
    type PaginationParams,
} from "@/lib/hooks/usePagination";
import { Toggle } from "@/components/ui/Toggle";
import { Button } from "./Button";

interface PaginationProps extends PaginationParams {
    allowFirstLast?: boolean;
}

const Pagination = ({
    total,
    siblings,
    boundaries,
    page,
    initialPage,
    onChange,
    allowFirstLast = false,
}: PaginationProps) => {
    const pagination = usePagination({
        total,
        siblings,
        boundaries,
        page,
        initialPage,
        onChange,
    });

    if (total <= 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-2">
            {allowFirstLast && (
                <Button
                    size="icon"
                    variant="outline"
                    disabled={pagination.active === 1}
                    aria-label={`First page`}
                    onClick={() => pagination.first()}>
                    <ChevronDoubleLeftIcon className="h-4 w-4" />
                </Button>
            )}
            <Button
                size="icon"
                variant="outline"
                disabled={pagination.active === 1}
                aria-label={`Previous page`}
                onClick={() => pagination.previous()}>
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            {pagination.range.map((page, idx) =>
                page === "separator" ? (
                    <div key={idx}>
                        <BsThreeDots className="h-4 w-4" />
                    </div>
                ) : (
                    <Toggle
                        variant="outline"
                        disabled={pagination.active === page}
                        pressed={pagination.active === page}
                        aria-label={`Go to page ${page}`}
                        onPressedChange={() => pagination.setPage(page)}
                        key={idx}>
                        {page}
                    </Toggle>
                )
            )}
            <Button
                size="icon"
                variant="outline"
                disabled={pagination.active === total}
                aria-label={`Next page`}
                onClick={() => pagination.next()}>
                <ChevronRightIcon className="h-4 w-4" />
            </Button>
            {allowFirstLast && (
                <Button
                    size="icon"
                    variant="outline"
                    disabled={pagination.active === total}
                    aria-label={`Last page`}
                    onClick={() => pagination.last()}>
                    <ChevronDoubleRightIcon className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
};

export { Pagination };
