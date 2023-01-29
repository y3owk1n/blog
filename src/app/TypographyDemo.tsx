"use client";

import { Blockquote } from "@/components/typography/Blockquote";
import { Code } from "@/components/typography/Code";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { H3 } from "@/components/typography/H3";
import { H4 } from "@/components/typography/H4";
import { Paragraph } from "@/components/typography/Paragraph";
import React from "react";

const TypographyDemo = () => {
    return (
        <div className="space-y-4">
            <H1>The Joke Tax Chronicles</H1>

            <H2>The Kings Plan</H2>

            <H3>The Joke Tax</H3>

            <H4>People stopped telling jokes</H4>

            <Paragraph>
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
            </Paragraph>

            <Paragraph variant="lead">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
            </Paragraph>

            <Paragraph variant="large">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
            </Paragraph>

            <Paragraph variant="small">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
            </Paragraph>

            <Paragraph variant="subtle">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
            </Paragraph>

            <Blockquote>
                &quot;After all,&quot; he said, &quot;everyone enjoys a good
                joke, so its only fair that they should pay for the
                privilege.&quot;
            </Blockquote>

            <Code>@radix-ui/react-alert-dialog</Code>
        </div>
    );
};

export default TypographyDemo;
