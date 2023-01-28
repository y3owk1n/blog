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

const tableContents: TableType = {
    title: ["King's Treasury", "People's happiness"],
    contents: [
        ["Empty", "Overflowing"],
        ["Modest", "Satisfied"],
        ["Full", "Ecstatic"],
    ],
};

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
                <Blockquote>
                    &quot;After all,&quot; he said, &quot;everyone enjoys a good
                    joke, so its only fair that they should pay for the
                    privilege.&quot;
                </Blockquote>
                <Table contents={tableContents} />
            </Container>
        </main>
    );
};

export default Page;
