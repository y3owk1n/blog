import { Checkbox } from "../ui/Checkbox";
import { Label } from "../ui/Label";

function LabelDemo() {
    return (
        <div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
    );
}

export default LabelDemo;
