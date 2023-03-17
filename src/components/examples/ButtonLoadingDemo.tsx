"use client";

import React from "react";

import { Button } from "@/components/ui/Button";

const ButtonLoadingDemo = () => {
    return (
        <Button
            loading
            disabled>
            Please wait
        </Button>
    );
};

export default ButtonLoadingDemo;
