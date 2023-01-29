import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/Collapsible";
import React from "react";

const CollapsibleDemo = () => {
    return (
        <Collapsible>
            <CollapsibleTrigger>
                Can I use this in my project?
            </CollapsibleTrigger>
            <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
            </CollapsibleContent>
        </Collapsible>
    );
};

export default CollapsibleDemo;
