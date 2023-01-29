import { Table } from "@/components/Table";
import React from "react";
import type { Table as TableType } from "@/components/Table";

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
