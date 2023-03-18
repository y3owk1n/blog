"use client";

import React, { useState } from "react";

import RichTextEditor from "@/components/ui/editor/RichTextEditor";

const RichTextEditorDisabledDemo = () => {
    const [value, setValue] = useState<string>("<p></p>");

    const handleValueChange = (body: string) => {
        setValue(body);
    };

    return (
        <RichTextEditor
            config={{ headingLevels: 6 }}
            toolbar={{}}
            value={value}
            onChange={handleValueChange}
            disabled
        />
    );
};

export default RichTextEditorDisabledDemo;
