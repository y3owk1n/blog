"use client";

import React, { useState } from "react";

import { Pagination } from "@/components/ui/Pagination";

const total = 10;

const PaginationWithEdgesLastDemo = () => {
    const [page, onChange] = useState(5);

    return (
        <Pagination
            total={total}
            withEdges
            page={page}
            onChange={onChange}
        />
    );
};

export default PaginationWithEdgesLastDemo;
