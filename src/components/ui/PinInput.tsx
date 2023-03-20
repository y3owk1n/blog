"use client";

import React from "react";

import {
    usePinInput,
    type PinInputActions,
    type UsePinInputProps,
} from "@/lib/hooks/usePinInput";
import { Input } from "./Input";

const PinInput = ({
    values,
    onChange,
    onComplete,
    autoFocus,
    defaultValues,
    type,
    otp,
    placeholder,
    disabled,
    mask,
    error,
}: UsePinInputProps) => {
    const actionRef = React.useRef<PinInputActions>(null);

    const { fields } = usePinInput({
        values,
        onChange,
        onComplete,
        actionRef,
        autoFocus,
        defaultValues,
        type,
        otp,
        placeholder,
        disabled,
        mask,
        error,
    });

    return (
        <div className="flex flex-wrap items-center gap-2">
            {fields.map((fieldProps, index) => (
                <Input
                    key={index}
                    className="w-10 text-center"
                    {...fieldProps}
                />
            ))}
        </div>
    );
};

export { PinInput };
