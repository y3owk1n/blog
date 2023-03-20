"use client";

import React, { useState } from "react";

import { PinInput } from "@/components/ui/PinInput";

const PinInputAlphaNumericDemo = () => {
    const [values, setValues] = useState(["", "", "", ""]);

    return (
        <PinInput
            values={values}
            onChange={setValues}
            type="alphanumeric"
        />
    );
};

export default PinInputAlphaNumericDemo;
