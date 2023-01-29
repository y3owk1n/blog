"use client";

import { Progress } from "@/components/Progress";
import React from "react";

const ProgressDemo = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Progress
            value={progress}
            className="w-[60%]"
        />
    );
};

export default ProgressDemo;
