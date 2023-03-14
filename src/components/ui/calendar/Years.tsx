import React from "react";

import { Button } from "../Button";
import { generateArrayNumber } from "./helpers";

interface Props {
    year: number;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, clickYear }) => {
    return (
        <div className="mt-2 grid w-full grid-cols-2 gap-2">
            {generateArrayNumber(year, year + 11).map((item, index) => (
                <Button
                    key={index}
                    className="py-3"
                    onClick={() => {
                        clickYear(item);
                    }}>
                    <>{item}</>
                </Button>
            ))}
        </div>
    );
};

export default Years;
