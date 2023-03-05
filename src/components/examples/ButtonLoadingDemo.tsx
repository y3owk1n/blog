"use client";

import { Button } from "@/components/ui/Button";
import React from "react";

const ButtonLoadingDemo = () => {
    return (
        <Button disabled>
            <span className="mr-2 block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent " />
            Please wait
        </Button>
    );
};

export default ButtonLoadingDemo;
