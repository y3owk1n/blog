import { Button } from "@/components/Button";
import InboxIcon from "@heroicons/react/20/solid/InboxIcon";
import React from "react";

const ButtonDemo = () => {
    return (
        <div className="flex gap-4">
            <Button>Button</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button>
                <InboxIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <span className="mr-2 block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent " />
                Please wait
            </Button>
        </div>
    );
};

export default ButtonDemo;
