"use client";

import React, { useState } from "react";

import { Pagination } from "@/components/ui/Pagination";

const total = 100;

const PaginationBoundariesDemo = () => {
    const [page, onChange] = useState(35);

    return (
        <Pagination
            allowFirstLast
            boundaries={0}
            total={total}
            page={page}
            onChange={onChange}
        />
    );
};

export default PaginationBoundariesDemo;
