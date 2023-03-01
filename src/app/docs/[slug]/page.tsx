"use client";

import { Container } from "@/components/ui/Container";
import AccordionDemo from "app/AccordionDemo";
import AlertDialogDemo from "app/AlertDialogDemo";
import AspectRatioDemo from "app/AspectRatioDemo";
import AvatarDemo from "app/AvatarDemo";
import ButtonDemo from "app/ButtonDemo";
import CheckboxDemo from "app/CheckboxDemo";
import CollapsibleDemo from "app/CollapsibleDemo";
import CommandComboBoxDemo from "app/CommandComboBoxDemo";
import CommandDialogDemo from "app/CommandDialogDemo";
import CommandDropdownMenuDemo from "app/CommandDropdownMenuDemo";
import CommandPopoverDemo from "app/CommandPopoverDemo";
import ContextMenuDemo from "app/ContextMenuDemo";
import DialogDemo from "app/DialogDemo";
import DropdownMenuDemo from "app/DropdownMenuDemo";
import EditorDemo from "app/EditorDemo";
import HoverCardDemo from "app/HoverCardDemo";
import InputDemo from "app/InputDemo";
import ListDemo from "app/ListDemo";
import MenubarDemo from "app/MenubarDemo";
import PopoverDemo from "app/PopoverDemo";
import ProgressDemo from "app/ProgressDemo";
import RadioGroupDemo from "app/RadioGroupDemo";
import ScrollAreaDemo from "app/ScrollAreaDemo";
import SelectDemo from "app/SelectDemo";
import SeparatorDemo from "app/SeparatorDemo";
import SliderDemo from "app/SliderDemo";
import SwitchDemo from "app/SwitchDemo";
import TableDemo from "app/TableDemo";
import TextareaDemo from "app/TextareaDemo";
import ToastDemo from "app/ToastDemo";
import TooltipDemo from "app/TooltipDemo";
import TypographyDemo from "app/TypographyDemo";

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
                <TableDemo />
                <TooltipDemo />
                <CommandDialogDemo />
                <CommandComboBoxDemo />
                <CommandPopoverDemo />
                <CommandDropdownMenuDemo />
                <ToastDemo />
                <EditorDemo />
            </Container>
        </main>
    );
};

export default Page;
