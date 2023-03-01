"use client";

import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import React from "react";

const DialogDemo = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when youre
                        done.
                    </DialogDescription>
                </DialogHeader>
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
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogDemo;
