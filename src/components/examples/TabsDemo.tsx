"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const TabsDemo = () => {
    return (
        <Tabs
            defaultValue="account"
            className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent
                value="account"
                className="p-4">
                <p className="text-sm text-slate-500 ">
                    Make changes to your account here. Click save when youre
                    done.
                </p>
                <div className="grid gap-2 py-4">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex">
                    <Button>Save changes</Button>
                </div>
            </TabsContent>
            <TabsContent
                value="password"
                className="p-4">
                <p className="text-sm text-slate-500 ">
                    Change your password here. After saving, youll be logged
                    out.
                </p>
                <div className="grid gap-2 py-4">
                    <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input
                            id="current"
                            type="password"
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input
                            id="new"
                            type="password"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex">
                    <Button>Save password</Button>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default TabsDemo;
