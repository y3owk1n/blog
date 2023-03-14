import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { githubProfile, linkedInProfile } from "@/lib/constants";
import CalendarDemo from "@/components/examples/CalendarDemo";
import CalendarMultipleDemo from "@/components/examples/CalendarMultiple";
import CalendarRangeDemo from "@/components/examples/CalendarRangeDemo";
import DatePickerDemo from "@/components/examples/DatePickerDemo";
import DatePickerMultipleDemo from "@/components/examples/DatePickerMultipleDemo";
import DatePickerRangeDemo from "@/components/examples/DatePickerRangeDemo";
import { Alert } from "@/components/ui/Alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
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
                        <AvatarImage src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/326749122_575940394058060_2190219092938663307_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v5EcmhEN5C0AX80TiOu&_nc_ht=scontent-sin6-3.xx&oh=00_AfDnQenJV-etxFQ4ceTE9GqdFHBLYHXChCMdWJzhivIDhQ&oe=64119BA6" />
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

const Page = () => {
    return (
        <main className="space-y-10">
            <section className="grid place-items-center py-24">
                <Avatar className="mb-8 h-20 w-20">
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
                    className="mt-10 max-w-lg text-center">
                    Hey, I&apos;m Kyle. I&apos;m the{" "}
                    <strong>Head Of Marketing</strong> at <TraworldHover />,
                    where my team helps to build brand, strategies and
                    conversions for the brand.
                </Alert>
            </section>
            <Separator />
            <section className="mx-auto max-w-lg space-y-4 py-24 ">
                <H3 className="text-center">About Me</H3>
                <Paragraph>
                    Hi there! I&apos;m a 31-year-old technology enthusiast
                    who&apos;s currently single. I have a real passion for
                    combining marketing and technology to create amazing
                    experiences that drive results. Over the past six years,
                    I&apos;ve been working in the data-driven Growth and Digital
                    Marketing world, and I&apos;ve helped to drive revenue
                    growth across a range of industries. Most recently,
                    I&apos;ve been working with <TraworldHover />, a
                    fast-growing Malaysia-based Travel E-Commerce startup.
                </Paragraph>
                <Paragraph>
                    My approach to marketing is to take a full-funnel and
                    holistic view of things. I use marketing technology,
                    automation, and analytics to optimize the customer
                    experience throughout their entire lifecycle. This allows me
                    to deliver 1:1 hyper-personalized campaigns at scale.
                </Paragraph>
                <Paragraph>
                    As part of my work, I lead the marketing team that&apos;s
                    focused on driving incremental and continual improvements.
                    We&apos;re always experimenting to improve key metrics like
                    LTV, CAC, ROAS, Products Per Customer, Retention, and more.
                    It&apos;s a challenging and exciting field, and I love every
                    minute of it!
                </Paragraph>
                <Separator />
                <Paragraph>
                    When I&apos;m not working, I&apos;m usually indulging in my
                    creative pursuits. I&apos;m really passionate about music,
                    singing, and programming.
                </Paragraph>
                <Paragraph>
                    There&apos;s something about building for the web that I
                    find incredibly rewarding. Whether it&apos;s starting with a
                    simple HTML file or working on a complex Next.js
                    application, there&apos;s always a sense of excitement and
                    possibility. That&apos;s because the web is such an amazing
                    platform.
                </Paragraph>
                <div className="flex justify-center gap-4">
                    <LinkTag
                        className="no-underline"
                        href={githubProfile}
                        target="_blank"
                        rel="noreferrer">
                        <Button variant="outline">
                            <AiFillGithub className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                    </LinkTag>
                    <LinkTag
                        className="no-underline"
                        href={linkedInProfile}
                        target="_blank"
                        rel="noreferrer">
                        <Button variant="outline">
                            <AiFillLinkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </Button>
                    </LinkTag>
                </div>
            </section>
        </main>
    );
};

export default Page;
