"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import React from "react";

const AvatarDemo = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default AvatarDemo;
