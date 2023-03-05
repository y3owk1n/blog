"use client";

import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Button } from "../ui/Button";

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
