import { AiOutlineItalic } from "react-icons/ai";
import { Toggle } from "../ui/Toggle";

function ToggleWithTextDemo() {
    return (
        <Toggle aria-label="Toggle italic">
            <AiOutlineItalic className="mr-2 h-4 w-4" />
            Italic
        </Toggle>
    );
}

export default ToggleWithTextDemo;
