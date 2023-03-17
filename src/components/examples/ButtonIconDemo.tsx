"use client";

import React from "react";
import InboxIcon from "@heroicons/react/20/solid/InboxIcon";

import { Button } from "@/components/ui/Button";

const ButtonIconDemo = () => {
    return (
        <div className="flex gap-2">
            <Button leftIcon={<InboxIcon className="h-4 w-4" />}>
                Login with Email
            </Button>
            <Button rightIcon={<InboxIcon className="h-4 w-4" />}>
                Signup with Email
            </Button>
        </div>
    );
};

export default ButtonIconDemo;
