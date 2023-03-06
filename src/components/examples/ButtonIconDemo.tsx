"use client";

import React from "react";
import InboxIcon from "@heroicons/react/20/solid/InboxIcon";

import { Button } from "@/components/ui/Button";

const ButtonIconDemo = () => {
    return (
        <Button>
            <InboxIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
    );
};

export default ButtonIconDemo;
