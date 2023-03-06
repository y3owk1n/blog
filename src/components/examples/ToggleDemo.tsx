"use client";

import { AiOutlineItalic } from "react-icons/ai";

import { Toggle } from "../ui/Toggle";

function ToggleDemo() {
    return (
        <Toggle aria-label="Toggle italic">
            <AiOutlineItalic className="h-4 w-4" />
        </Toggle>
    );
}

export default ToggleDemo;
