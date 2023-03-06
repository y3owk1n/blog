"use client";

import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const AvatarDemo = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default AvatarDemo;
