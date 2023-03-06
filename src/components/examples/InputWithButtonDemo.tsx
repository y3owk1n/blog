"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const InputWithButtonDemo = () => {
    return (
        <div className="flex  items-center space-x-2">
            <Input
                type="email"
                placeholder="Email"
            />
            <Button type="submit">Subscribe</Button>
        </div>
    );
};

export default InputWithButtonDemo;
