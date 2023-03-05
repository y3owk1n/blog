"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/Drawer";

const DRAWER_SIZES = ["sm", "default", "lg", "xl", "full", "content"] as const;

type DrawerSize = (typeof DRAWER_SIZES)[number];

function DrawerSizeDemo() {
    const [size, setSize] = useState<DrawerSize>("default");
    return (
        <div className="flex flex-col space-y-8">
            <RadioGroup
                defaultValue={size}
                onValueChange={(value) => setSize(value as DrawerSize)}>
                <div className="grid grid-cols-2 gap-2">
                    {DRAWER_SIZES.map((size, index) => (
                        <div
                            key={`${size}-${index}`}
                            className="flex items-center space-x-2">
                            <RadioGroupItem
                                value={size}
                                id={size}
                            />
                            <Label htmlFor={size}>{size}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>Open {size} sheet</Button>
                </DrawerTrigger>
                <DrawerContent
                    position="right"
                    size={size}>
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

export default DrawerSizeDemo;
