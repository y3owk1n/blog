import { CalendarDaysIcon } from "@heroicons/react/20/solid";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { LinkTag } from "@/components/ui/typography/LinkTag";

const TraworldHover = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <LinkTag
                    href="https://www.traworld.com"
                    target="_blank"
                    rel="noreferrer">
                    Traworld
                </LinkTag>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 text-left">
                    <Avatar>
                        <AvatarImage src="https://media.licdn.com/dms/image/C560BAQFQ1ApI7-kHfw/company-logo_200_200/0/1619433974628?e=1687392000&v=beta&t=JBM3Vg-YGs9EGqKrkVodf6GwgihBpQmskXZacDDGqC0" />
                        <AvatarFallback>TW</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Traworld</h4>
                        <p className="text-sm">
                            Traworld is a one-stop e-commerce travel platform
                            with a wide range of services for you to explore,
                            plan and book with ease and convenience.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-slate-500">
                                Joined April 2021
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default TraworldHover;
