import { AiOutlineItalic } from "react-icons/ai";

import { Toggle } from "../ui/Toggle";

function ToggleOutlineDemo() {
    return (
        <Toggle
            variant="outline"
            aria-label="Toggle italic">
            <AiOutlineItalic className="h-4 w-4" />
        </Toggle>
    );
}

export default ToggleOutlineDemo;
