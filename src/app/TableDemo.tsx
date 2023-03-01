"use client";

import { Table } from "@/components/ui/Table";
import React from "react";
import type { Table as TableType } from "@/components/ui/Table";

const tableContents: TableType = {
    title: ["King's Treasury", "People's happiness"],
    contents: [
        ["Empty", "Overflowing"],
        ["Modest", "Satisfied"],
        ["Full", "Ecstatic"],
    ],
};

const TableDemo = () => {
    return <Table contents={tableContents} />;
};

export default TableDemo;
