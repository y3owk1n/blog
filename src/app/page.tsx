import { H1 } from "@/components/typography/H1";
import { Container } from "@/components/Container";
import React from "react";
import { H2 } from "@/components/typography/H2";
import { H3 } from "@/components/typography/H3";
import { H4 } from "@/components/typography/H4";

const Page = () => {
    return (
        <main>
            <Container>
                <H1>The Joke Tax Chronicles</H1>
                <H2>The Kings Plan</H2>
                <H3>The Joke Tax</H3>
                <H4>People stopped telling jokes</H4>
            </Container>
        </main>
    );
};

export default Page;
