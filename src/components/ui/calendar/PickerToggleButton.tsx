import React from "react";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/20/solid";

interface ToggleButtonProps {
    isEmpty: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = (
    e: ToggleButtonProps
): JSX.Element => {
    return e.isEmpty ? (
        <CalendarIcon className="h-5 w-5" />
    ) : (
        <XMarkIcon className="h-5 w-5" />
    );
};

export default ToggleButton;
