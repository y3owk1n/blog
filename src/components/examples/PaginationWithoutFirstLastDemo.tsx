"use client";

import React, { useState } from "react";

import { Pagination } from "@/components/ui/Pagination";

const total = 10;

const PaginationWithoutFirstLastDemo = () => {
    const [page, onChange] = useState(5);

    return (
        <Pagination
            total={total}
            page={page}
            onChange={onChange}
        />
    );
};

export default PaginationWithoutFirstLastDemo;
