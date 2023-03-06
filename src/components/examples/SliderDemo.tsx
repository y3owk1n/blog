"use client";

import React from "react";

import { Slider } from "@/components/ui/Slider";

const SliderDemo = () => {
    return (
        <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-[60%]"
        />
    );
};

export default SliderDemo;
