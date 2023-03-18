"use client";

import "@/styles/tiptap.css";
import React, { useEffect } from "react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import {
    BubbleMenu,
    EditorContent,
    FloatingMenu,
    useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { lowlight } from "lowlight";

import { Loader } from "@/components/ui/Loader";
import ToolbarMenu from "@/components/ui/editor/ToolbarMenu";

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface RichTextEditorConfig {
    placeholderText?: string;
    bubbleMenu?: boolean;
    floatingMenu?: boolean;
    headingLevels: Level;
}

export interface RichTextEditorToolbar {
    undo?: boolean;
    redo?: boolean;
    codeBlock?: boolean;
    horizontalRule?: boolean;
    blockquote?: boolean;
    bulletList?: boolean;
    orderedList?: boolean;
    link?: boolean;
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
    strike?: boolean;
    textLeftAlign?: boolean;
    textRightAlign?: boolean;
    textCenterAlign?: boolean;
    textJustifyAlign?: boolean;
}

export interface RichTextEditorProps {
    config: RichTextEditorConfig;
    toolbar: RichTextEditorToolbar;
    floatingMenuToolbar?: RichTextEditorToolbar;
    bubbleMenuToolbar?: RichTextEditorToolbar;
    value: string;
    onChange(body: string): void;
    disabled?: boolean;
}

const RichTextEditor = ({
    value,
    onChange,
    config,
    disabled = false,
    toolbar,
    floatingMenuToolbar,
    bubbleMenuToolbar,
}: RichTextEditorProps) => {
    const headingsArray = (Array.from(Array(config.headingLevels).keys()).map(
        (x) => x + 1
    ) as Level[]) || [1, 2, 3, 4, 5, 6];

    const editor = useEditor({
        editable: !disabled,
        extensions: [
            StarterKit.configure({
                codeBlock: false,
                heading: {
                    levels: headingsArray,
                },
            }),
            Document,
            Paragraph,
            Text,
            Underline,
            TextStyle,
            Link.configure({
                openOnClick: false,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Placeholder.configure({
                placeholder: config.placeholderText || "Write something …",
                showOnlyWhenEditable: false,
            }),
        ],
        content: value || "",
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange(html);
        },
        editorProps: {
            attributes: {
                class: "prose max-w-none dark:prose-invert m-5 focus:outline-none",
            },
        },
    });

    useEffect(() => {
        lowlight.registerLanguage("html", html);
        lowlight.registerLanguage("css", css);
        lowlight.registerLanguage("js", js);
        lowlight.registerLanguage("ts", ts);
    }, []);

    if (!editor)
        return (
            <div className="grid place-items-center rounded-md border border-slate-200 py-20  dark:border-slate-700">
                <Loader />
            </div>
        );

    return (
        <div>
            {config.bubbleMenu && bubbleMenuToolbar && (
                <BubbleMenu
                    className="flex w-full flex-wrap items-center gap-2 rounded-md bg-slate-50 p-2 drop-shadow-lg dark:bg-slate-900"
                    editor={editor}
                    tippyOptions={{ duration: 100 }}>
                    <ToolbarMenu
                        editor={editor}
                        headingsArray={headingsArray}
                        toolbarConfig={bubbleMenuToolbar}
                    />
                </BubbleMenu>
            )}

            {config.floatingMenu && floatingMenuToolbar && (
                <FloatingMenu
                    className="flex w-full flex-wrap items-center gap-2 rounded-md bg-slate-50 p-2 drop-shadow-lg dark:bg-slate-900"
                    editor={editor}
                    tippyOptions={{ duration: 100 }}>
                    <ToolbarMenu
                        editor={editor}
                        headingsArray={headingsArray}
                        toolbarConfig={floatingMenuToolbar}
                    />
                </FloatingMenu>
            )}

            <div className="mt-2 rounded-md border border-slate-200  dark:border-slate-700">
                <div className="flex flex-wrap items-center gap-2 rounded-t-md bg-slate-50 p-2 drop-shadow dark:bg-slate-900">
                    <ToolbarMenu
                        editor={editor}
                        headingsArray={headingsArray}
                        toolbarConfig={toolbar}
                    />
                </div>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};
RichTextEditor.displayName = "RichTextEditor";

export default RichTextEditor;
