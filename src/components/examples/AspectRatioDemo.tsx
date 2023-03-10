"use client";

import React from "react";

import { ImageWithAspectRatio } from "@/components/ui/ImageWithAspectRatio";

const AspectRatioDemo = () => {
    return (
        <div className="w-[450px]">
            <ImageWithAspectRatio
                aspectRatioProps={{
                    ratio: 16 / 9,
                }}
                imageProps={{
                    src: "https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80",
                    alt: "Photo by Alvaro Pinot",
                }}
            />
        </div>
    );
};

export default AspectRatioDemo;
