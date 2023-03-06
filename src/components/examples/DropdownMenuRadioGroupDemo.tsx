"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState("bottom");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">
                        Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                        Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                        Right
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropdownMenuRadioGroupDemo;
