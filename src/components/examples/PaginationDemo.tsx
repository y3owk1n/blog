"use client";

import React, { useState } from "react";

import { Pagination } from "@/components/ui/Pagination";

const total = 10;

const PaginationDemo = () => {
    const [page, onChange] = useState(5);

    return (
        <Pagination
            allowFirstLast
            total={total}
            page={page}
            onChange={onChange}
        />
    );
};

export default PaginationDemo;
