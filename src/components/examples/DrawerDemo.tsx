"use client";

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

function DrawerDemo() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open</Button>
            </DrawerTrigger>
            <DrawerContent
                position="right"
                size="sm">
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
    );
}

export default DrawerDemo;
