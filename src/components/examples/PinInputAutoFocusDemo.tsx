"use client";

import React, { useState } from "react";

import { PinInput } from "@/components/ui/PinInput";

const PinInputAutoFocusDemo = () => {
    const [values, setValues] = useState(["", "", "", ""]);

    return (
        <PinInput
            values={values}
            onChange={setValues}
            autoFocus
        />
    );
};

export default PinInputAutoFocusDemo;
