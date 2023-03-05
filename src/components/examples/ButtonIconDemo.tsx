"use client";

import { Button } from "@/components/ui/Button";
import InboxIcon from "@heroicons/react/20/solid/InboxIcon";
import React from "react";

const ButtonIconDemo = () => {
    return (
        <Button>
            <InboxIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
    );
};

export default ButtonIconDemo;
