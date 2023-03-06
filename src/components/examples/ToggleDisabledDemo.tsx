import { AiOutlineItalic } from "react-icons/ai";

import { Toggle } from "@/components/ui/Toggle";

function ToggleDisabledDemo() {
    return (
        <Toggle
            aria-label="Toggle italic"
            disabled>
            <AiOutlineItalic className="h-4 w-4" />
        </Toggle>
    );
}

export default ToggleDisabledDemo;
