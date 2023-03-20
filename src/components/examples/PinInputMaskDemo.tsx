"use client";

import React, { useState } from "react";

import { PinInput } from "@/components/ui/PinInput";

const PinInputMaskDemo = () => {
    const [values, setValues] = useState(["", "", "", ""]);

    return (
        <PinInput
            values={values}
            onChange={setValues}
            mask
        />
    );
};

export default PinInputMaskDemo;
