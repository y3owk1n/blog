import React from "react";

interface Props {
    contents: string[];
}

const List = ({ contents }: Props) => {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {contents.map((content, index) => (
                <li key={`${content}-${index}`}>{content}</li>
            ))}
        </ul>
    );
};

export { List };
