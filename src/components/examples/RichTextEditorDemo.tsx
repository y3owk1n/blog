"use client";

import React, { useState } from "react";

import RichTextEditor from "@/components/ui/editor/RichTextEditor";

const RichTextEditorDemo = () => {
    const [value, setValue] = useState<string>("<p></p>");

    const handleValueChange = (body: string) => {
        setValue(body);
    };

    return (
        <RichTextEditor
            config={{
                headingLevels: 6,
                placeholderText: "Welcome, start writing!",
                bubbleMenu: true,
                floatingMenu: true,
            }}
            toolbar={{
                undo: true,
                redo: true,
                codeBlock: true,
                horizontalRule: true,
                blockquote: true,
                bulletList: true,
                orderedList: true,
                link: true,
                bold: true,
                underline: true,
                italic: true,
                strike: true,
                subscript: true,
                superscript: true,
                textLeftAlign: true,
                textRightAlign: true,
                textCenterAlign: true,
                textJustifyAlign: true,
            }}
            floatingMenuToolbar={{
                bulletList: true,
                orderedList: true,
                link: true,
                bold: true,
                underline: true,
                italic: true,
                strike: true,
            }}
            bubbleMenuToolbar={{
                bulletList: true,
                orderedList: true,
                link: true,
                bold: true,
                underline: true,
                italic: true,
                strike: true,
            }}
            value={value}
            onChange={handleValueChange}
        />
    );
};

export default RichTextEditorDemo;
