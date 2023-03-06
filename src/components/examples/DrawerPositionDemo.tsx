"use client";

import { useState } from "react";

import { Button } from "../ui/Button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/Drawer";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup";

const DRAWER_POSITIONS = ["top", "right", "bottom", "left"] as const;

type DrawerPosition = (typeof DRAWER_POSITIONS)[number];

function DrawerPositionDemo() {
    const [position, setPosition] = useState<DrawerPosition>("right");
    return (
        <div className="flex flex-col space-y-8">
            <RadioGroup
                defaultValue={position}
                onValueChange={(value) => setPosition(value as DrawerPosition)}>
                <div className="grid grid-cols-2 gap-2">
                    {DRAWER_POSITIONS.map((position, index) => (
                        <div
                            key={`${position}-${index}`}
                            className="flex items-center space-x-2">
                            <RadioGroupItem
                                value={position}
                                id={position}
                            />
                            <Label htmlFor={position}>{position}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>Open {position} sheet</Button>
                </DrawerTrigger>
                <DrawerContent
                    position={position}
                    size="content">
                    <DrawerHeader>
                        <DrawerTitle>Edit profile</DrawerTitle>
                        <DrawerDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="name"
                                className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="username"
                                className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                value="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button type="submit">Save changes</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default DrawerPositionDemo;
