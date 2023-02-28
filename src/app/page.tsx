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
import ContextMenuDemo from "./ContextMenuDemo";
import InputDemo from "./InputDemo";
import DialogDemo from "./DialogDemo";
import DropdownMenuDemo from "./DropdownMenuDemo";
import HoverCardDemo from "./HoverCardDemo";
import MenubarDemo from "./MenubarDemo";
import PopoverDemo from "./PopoverDemo";
import ProgressDemo from "./ProgressDemo";
import RadioGroupDemo from "./RadioGroupDemo";
import SeparatorDemo from "./SeparatorDemo";
import ScrollAreaDemo from "./ScrollAreaDemo";
import SelectDemo from "./SelectDemo";
import SliderDemo from "./SliderDemo";
import SwitchDemo from "./SwitchDemo";
import TabsDemo from "./TabsDemo";
import TextareaDemo from "./TextareaDemo";
import TooltipDemo from "./TooltipDemo";
import EditorDemo from "./EditorDemo";

const Page = () => {
    return (
        <main>
            <Container className="space-y-8">
                <TypographyDemo />
                <TableDemo />
                <ListDemo />
                <AccordionDemo />
                <div className="flex gap-4">
                    <AlertDialogDemo />
                    <DialogDemo />
                    <DropdownMenuDemo />
                </div>
                <AspectRatioDemo />
                <AvatarDemo />
                <ButtonDemo />
                <CheckboxDemo />
                <CollapsibleDemo />
                <ContextMenuDemo />
                <InputDemo />
                <TextareaDemo />
                <HoverCardDemo />
                <MenubarDemo />
                <PopoverDemo />
                <ProgressDemo />
                <RadioGroupDemo />
                <SeparatorDemo />
                <ScrollAreaDemo />
                <SelectDemo />
                <SliderDemo />
                <SwitchDemo />
                <TabsDemo />
                <TooltipDemo />
                <EditorDemo />
            </Container>
        </main>
    );
};

export default Page;
