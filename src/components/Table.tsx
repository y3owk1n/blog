import React from "react";

export interface Table {
    title: string[];
    contents: string[][];
}

interface Props {
    contents: Table;
}

const Table = ({ contents }: Props) => {
    const tableHeaders = contents.title;
    const TableContents = contents.contents;

    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t border-slate-300 p-0 even:bg-slate-100">
                        {tableHeaders.map((header, index) => (
                            <th
                                key={`${header}-${index}`}
                                className="border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TableContents.map((content, index) => (
                        <tr
                            key={`${index}`}
                            className="m-0 border-t border-slate-200 p-0 even:bg-slate-100">
                            {content.map((sub, index) => (
                                <td
                                    key={`${sub}-${index}`}
                                    className="border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    {sub}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { Table };
