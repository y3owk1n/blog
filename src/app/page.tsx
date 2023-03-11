import { CalendarDaysIcon } from "@heroicons/react/20/solid";

import { Alert } from "@/components/ui/Alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { Separator } from "@/components/ui/Separator";
import { H1 } from "@/components/ui/typography/H1";
import { H3 } from "@/components/ui/typography/H3";
import { LinkTag } from "@/components/ui/typography/LinkTag";
import { Paragraph } from "@/components/ui/typography/Paragraph";

const Page = () => {
    return (
        <main className="space-y-10">
            <section className="grid place-items-center py-24">
                <Avatar className="mb-8">
                    <AvatarImage src="https://github.com/y3owk1n.png" />
                    <AvatarFallback>KY</AvatarFallback>
                </Avatar>
                <H1>Kyle Wong</H1>
                <Paragraph>Kuala Lumpur, Malaysia</Paragraph>
                <Paragraph variant="subtle">
                    Digital Marketer, Web Developer
                </Paragraph>
                <Alert
                    variant="outline"
                    className="mt-10 max-w-sm text-center">
                    Hey, I&apos;m Kyle. I&apos;m the{" "}
                    <strong>Head Of Marketing</strong> at{" "}
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
                                    <AvatarImage src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/326749122_575940394058060_2190219092938663307_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v5EcmhEN5C0AX80TiOu&_nc_ht=scontent-sin6-3.xx&oh=00_AfDnQenJV-etxFQ4ceTE9GqdFHBLYHXChCMdWJzhivIDhQ&oe=64119BA6" />
                                    <AvatarFallback>TW</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">
                                        Traworld
                                    </h4>
                                    <p className="text-sm">
                                        Traworld is a one-stop e-commerce travel
                                        platform with a wide range of services
                                        for you to explore, plan and book with
                                        ease and convenience.
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
                    , where my team helps to build brand, strategies and
                    conversions for the brand.
                </Alert>
            </section>
            <Separator />
            <section className="container mx-auto space-y-4 py-24 text-center">
                <H3>What is in here?</H3>
                <Paragraph>
                    This is the place for me to write some blog posts about what
                    is going on in my life, and also alot of snippets and
                    components that i have been using for most of my projects.
                </Paragraph>
            </section>
        </main>
    );
};

export default Page;
