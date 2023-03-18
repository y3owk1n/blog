"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import RichTextEditor from "@/components/ui/editor/RichTextEditor";
import { Code } from "../ui/typography/Code";

interface FormData {
    html: string;
}

const RichTextEditorWithReactHookFormDemo = () => {
    const { control, watch } = useForm<FormData>({
        defaultValues: {
            html: "<p></p>",
        },
    });

    return (
        <div className="flex flex-col gap-4">
            <Controller
                control={control}
                name="html"
                render={({ field: { onChange, value } }) => (
                    <RichTextEditor
                        config={{ headingLevels: 6 }}
                        toolbar={{}}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
            <Code>{JSON.stringify(watch(), null, 2)}</Code>
        </div>
    );
};

export default RichTextEditorWithReactHookFormDemo;
