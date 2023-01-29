import { Container } from "@/components/Container";
import React from "react";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { H3 } from "@/components/typography/H3";
import { H4 } from "@/components/typography/H4";
import { Paragraph } from "@/components/typography/Paragraph";
import { Blockquote } from "@/components/typography/Blockquote";
import type { Table as TableType } from "@/components/Table";
import { Table } from "@/components/Table";
import { List } from "@/components/typography/List";
import { Code } from "@/components/typography/Code";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Accordion";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/AlertDialog";
import { AspectRatio } from "@/components/AspectRatio";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { InboxIcon } from "@heroicons/react/20/solid";

const tableContents: TableType = {
    title: ["King's Treasury", "People's happiness"],
    contents: [
        ["Empty", "Overflowing"],
        ["Modest", "Satisfied"],
        ["Full", "Ecstatic"],
    ],
};

const listContents = [
    "1st level of puns: 5 gold coins",
    "2nd level of jokes: 10 gold coins",
    "3rd level of one-liners : 20 gold coins",
];

const Page = () => {
    return (
        <main>
            <Container className="space-y-4">
                <H1>The Joke Tax Chronicles</H1>
                <H2>The Kings Plan</H2>
                <H3>The Joke Tax</H3>
                <H4>People stopped telling jokes</H4>
                <Paragraph>
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </Paragraph>
                <Paragraph variant="lead">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </Paragraph>
                <Paragraph variant="large">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </Paragraph>
                <Paragraph variant="small">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </Paragraph>
                <Paragraph variant="subtle">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </Paragraph>
                <Blockquote>
                    &quot;After all,&quot; he said, &quot;everyone enjoys a good
                    joke, so its only fair that they should pay for the
                    privilege.&quot;
                </Blockquote>
                <Table contents={tableContents} />
                <List contents={listContents} />
                <Code>@radix-ui/react-alert-dialog</Code>
                <Accordion
                    type="single"
                    collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the
                            other components aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Its animated by default, but you can disable it
                            if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you sure absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <div className="w-[450px]">
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
                            alt="Photo by Alvaro Pinot"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex gap-4">
                    <Button>Button</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="subtle">Subtle</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button>
                        <InboxIcon className="mr-2 h-4 w-4" /> Login with Email
                    </Button>
                    <Button disabled>
                        <span className="mr-2 block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent " />
                        Please wait
                    </Button>
                </div>
            </Container>
        </main>
    );
};

export default Page;
