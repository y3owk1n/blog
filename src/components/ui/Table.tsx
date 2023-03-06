import React from "react";

import { classNames } from "@/lib/classNames";

const Table = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableElement>) => {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table
                className={classNames("w-full", className)}
                {...props}
            />
        </div>
    );
};

const Tr = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => {
    return (
        <tr
            className={classNames(
                "m-0 border-t border-slate-300 p-0 even:bg-slate-100",
                className
            )}
            {...props}
        />
    );
};

const Th = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
    return (
        <th
            className={classNames(
                "border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    );
};

const Td = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
    return (
        <td
            className={classNames(
                "border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    );
};

export { Table, Tr, Th, Td };
