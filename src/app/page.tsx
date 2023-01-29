"use client";

import { Container } from "@/components/Container";
import React from "react";
import TypographyDemo from "./TypographyDemo";
import TableDemo from "./TableDemo";
import ListDemo from "./ListDemo";
import AccordionDemo from "./AccordionDemo";
import AlertDialogDemo from "./AlertDialogDemo";
import AspectRatioDemo from "./AspectRatioDemo";
import AvatarDemo from "./AvatarDemo";
import ButtonDemo from "./ButtonDemo";
import CheckboxDemo from "./CheckboxDemo";
import CollapsibleDemo from "./CollapsibleDemo";

const Page = () => {
    return (
        <main>
            <Container className="space-y-8">
                <TypographyDemo />
                <TableDemo />
                <ListDemo />
                <AccordionDemo />
                <AlertDialogDemo />
                <AspectRatioDemo />
                <AvatarDemo />
                <ButtonDemo />
                <CheckboxDemo />
                <CollapsibleDemo />
            </Container>
        </main>
    );
};

export default Page;
