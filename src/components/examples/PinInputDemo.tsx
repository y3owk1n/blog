"use client";

import React, { useState } from "react";

import { PinInput } from "@/components/ui/PinInput";

const PinInputDemo = () => {
    const [values, setValues] = useState(["", "", "", ""]);

    return (
        <PinInput
            values={values}
            onChange={setValues}
            otp
        />
    );
};

export default PinInputDemo;
