"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import { PinInput } from "@/components/ui/PinInput";
import { Code } from "@/components/ui/typography/Code";

interface FormData {
    pin: string[];
}

const PinInputWithReactHookFormDemo = () => {
    const { watch, control } = useForm<FormData>({
        defaultValues: {
            pin: ["", "", "", ""],
        },
    });

    return (
        <div className="flex w-full flex-col gap-4">
            <Controller
                control={control}
                name="pin"
                render={({ field: { onChange, value } }) => (
                    <PinInput
                        values={value}
                        onChange={onChange}
                    />
                )}
            />
            <Code>{JSON.stringify(watch(), null, 2)}</Code>
        </div>
    );
};

export default PinInputWithReactHookFormDemo;
