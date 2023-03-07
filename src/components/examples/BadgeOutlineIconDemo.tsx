"use client";

import React from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { Badge } from "@/components/ui/Badge";

const BadgeOutlineIconDemo = () => {
    return (
        <Badge
            variant="outline"
            icon={<ChevronUpIcon className="h-4 w-4" />}>
            Badge
        </Badge>
    );
};

export default BadgeOutlineIconDemo;
