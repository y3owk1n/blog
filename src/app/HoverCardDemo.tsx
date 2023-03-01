"use client";

import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const HoverCardDemo = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by
                            @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-slate-500">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default HoverCardDemo;
