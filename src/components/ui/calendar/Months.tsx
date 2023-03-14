import React, { useContext } from "react";
import dayjs from "dayjs";

import { Button } from "../Button";
import { MONTHS } from "./constants";
import DatepickerContext from "./context";
import { loadLanguageModule } from "./helpers";

interface Props {
    clickMonth: (month: number) => void;
}

const Months: React.FC<Props> = ({ clickMonth }) => {
    const { i18n } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    return (
        <div className="mt-2 grid w-full grid-cols-2 gap-2">
            {MONTHS.map((item) => (
                <Button
                    key={item}
                    className="py-3"
                    onClick={() => {
                        clickMonth(item);
                    }}>
                    <>{dayjs(`2022-${item}-01`).locale(i18n).format("MMM")}</>
                </Button>
            ))}
        </div>
    );
};

export default Months;
