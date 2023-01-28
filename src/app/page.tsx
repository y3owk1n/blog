import Container from "@/components/Container";
import React from "react";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";
import Paragraph from "@/components/typography/Paragraph";
import Blockquote from "@/components/typography/Blockquote";
import type { Table as TableType } from "@/components/Table";
import Table from "@/components/Table";
import List from "@/components/typography/List";
import Code from "@/components/typography/Code";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Accordion";

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
            <Container>
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
            </Container>
        </main>
    );
};

export default Page;
