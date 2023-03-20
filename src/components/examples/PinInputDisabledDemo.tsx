"use client";

import React, { useState } from "react";

import { PinInput } from "@/components/ui/PinInput";

const PinInputDisabledDemo = () => {
    const [values, setValues] = useState(["", "", "", ""]);

    return (
        <PinInput
            values={values}
            onChange={setValues}
            disabled
        />
    );
};

export default PinInputDisabledDemo;
