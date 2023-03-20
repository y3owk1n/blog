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
import { Button } from "@/components/ui/Button";
import { Toggle } from "@/components/ui/Toggle";

interface PaginationProps extends PaginationParams {
    withEdges?: boolean;
    withControls?: boolean;
}

const Pagination = ({
    total,
    siblings,
    boundaries,
    page,
    initialPage,
    onChange,
    withEdges = false,
    withControls = false,
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
            {withEdges && (
                <Button
                    size="icon"
                    variant="outline"
                    disabled={pagination.active === 1}
                    aria-label={`first page button aria-label`}
                    onClick={() => pagination.first()}>
                    <ChevronDoubleLeftIcon className="h-4 w-4" />
                </Button>
            )}
            {withControls && (
                <Button
                    size="icon"
                    variant="outline"
                    disabled={pagination.active === 1}
                    aria-label={`previous page button aria-label`}
                    onClick={() => pagination.previous()}>
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
            )}
            {pagination.range.map((page, idx) =>
                page === "separator" ? (
                    <BsThreeDots
                        key={idx}
                        aria-label="dots element aria-label"
                        className="h-4 w-4"
                    />
                ) : (
                    <Toggle
                        variant="outline"
                        disabled={pagination.active === page}
                        pressed={pagination.active === page}
                        aria-label={`${page} item aria-label`}
                        onPressedChange={() => pagination.setPage(page)}
                        key={idx}>
                        {page}
                    </Toggle>
                )
            )}
            {withControls && (
                <Button
                    size="icon"
                    variant="outline"
                    disabled={pagination.active === total}
                    aria-label={`next page button aria-label`}
                    onClick={() => pagination.next()}>
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            )}
            {withEdges && (
                <Button
                    size="icon"
                    variant="outline"
                    disabled={pagination.active === total}
                    aria-label={`last page button aria-label`}
                    onClick={() => pagination.last()}>
                    <ChevronDoubleRightIcon className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
};

export { Pagination };
