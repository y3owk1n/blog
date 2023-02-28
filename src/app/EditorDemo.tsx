import { checkMarkdownSyntax } from "@/lib/checkMarkdownSyntax";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { HTMLDeserializer } from "@editablejs/deserializer/html";
import {
    ContentEditable,
    EditableProvider,
    isTouchDevice,
    parseDataTransfer,
    useIsomorphicLayoutEffect,
    withEditable,
} from "@editablejs/editor";
import { createEditor, Editor, Range, Transforms } from "@editablejs/models";
import { withHistory } from "@editablejs/plugin-history";
import { TitleEditor, withTitle } from "@editablejs/plugin-title";
import { withTitleHTMLDeserializerTransform } from "@editablejs/plugin-title/deserializer/html";
import { withTitleHTMLSerializerTransform } from "@editablejs/plugin-title/serializer/html";
import {
    Toolbar,
    ToolbarComponent,
    useToolbarEffect,
    withToolbar,
} from "@editablejs/plugin-toolbar";
import {
    InlineToolbar,
    useInlineToolbarEffect,
    withInlineToolbar,
} from "@editablejs/plugin-toolbar/inline";
import {
    SideToolbar,
    useSideToolbarMenuEffect,
    withSideToolbar,
} from "@editablejs/plugin-toolbar/side";
import {
    SlashToolbar,
    useSlashToolbarEffect,
    withSlashToolbar,
} from "@editablejs/plugin-toolbar/slash";
import {
    ContextMenu,
    useContextMenuEffect,
    withPlugins,
} from "@editablejs/plugins";
import { withHTMLDeserializerTransform } from "@editablejs/plugins/deserializer/html";
import {
    withMarkdownDeserializerPlugin,
    withMarkdownDeserializerTransform,
} from "@editablejs/plugins/deserializer/markdown";
import { withHTMLSerializerTransform } from "@editablejs/plugins/serializer/html";
import {
    withMarkdownSerializerPlugin,
    withMarkdownSerializerTransform,
} from "@editablejs/plugins/serializer/markdown";
import { withTextSerializerTransform } from "@editablejs/plugins/serializer/text";
import { HTMLSerializer } from "@editablejs/serializer/html";
import React, { useMemo } from "react";

import { MarkdownDeserializer } from "@editablejs/deserializer/markdown";

import { createContextMenuItems } from "@/components/editor/ContextMenuItems";
import { createInlineToolbarItems } from "@/components/editor/InlineToolbarItems";
import { createSideToolbarItems } from "@/components/editor/SideToolbarItems";
import { createSlashToolbarItems } from "@/components/editor/SlashToolbarItems";
import {
    createToolbarItems,
    defaultBackgroundColor,
    defaultFontColor,
} from "@/components/editor/ToolbarItems";

const EditorDemo = () => {
    const editor = useMemo(() => {
        let editor = withEditable(createEditor());

        editor = withHistory(editor);

        editor = withPlugins(editor, {
            fontSize: { defaultSize: "14px" },
            fontColor: { defaultColor: defaultFontColor },
            backgroundColor: { defaultColor: defaultBackgroundColor },
            codeBlock: {
                languages: [
                    {
                        value: "plain",
                        content: "Plain text",
                    },
                    {
                        value: "javascript",
                        content: "JavaScript",
                        plugin: javascript(),
                    },
                    {
                        value: "html",
                        content: "HTML",
                        plugin: html(),
                    },
                    {
                        value: "css",
                        content: "CSS",
                        plugin: css(),
                    },
                ],
            },
        });

        editor = withInlineToolbar(withToolbar(editor));

        if (!isTouchDevice) {
            editor = withSideToolbar(editor, {
                match: (n) => !TitleEditor.isTitle(editor, n),
            });
        }

        editor = withSlashToolbar(editor, {
            match: () =>
                !Editor.above(editor, {
                    match: (n) => TitleEditor.isTitle(editor, n),
                }),
        });

        editor = withTitle(editor);

        return editor;
    }, []);

    useIsomorphicLayoutEffect(() => {
        withMarkdownDeserializerPlugin(editor); // Adds a markdown deserializer plugin to the editor
        withMarkdownSerializerPlugin(editor); // Adds a markdown serializer plugin to the editor
        withTextSerializerTransform(editor); // Adds a text serializer transform to the editor
        withHTMLSerializerTransform(editor); // Adds an HTML serializer transform to the editor
        withMarkdownSerializerTransform(editor); // Adds a markdown serializer transform to the editor
        withHTMLDeserializerTransform(editor); // Adds an HTML deserializer transform to the editor
        withMarkdownDeserializerTransform(editor); // Adds a markdown deserializer transform to the editor
        HTMLDeserializer.withEditor(
            editor,
            withTitleHTMLDeserializerTransform,
            {}
        );
        HTMLSerializer.withEditor(editor, withTitleHTMLSerializerTransform, {});
        const { onPaste } = editor;

        editor.onPaste = (event) => {
            const { clipboardData, type } = event;
            if (!clipboardData || !editor.selection) return onPaste(event);
            const { text, fragment, html, files } =
                parseDataTransfer(clipboardData);
            const isPasteText = type === "pasteText";
            if (!isPasteText && (fragment.length > 0 || files.length > 0)) {
                return onPaste(event);
            }
            if (Range.isExpanded(editor.selection)) {
                Transforms.delete(editor);
            }
            const anchor = Range.start(editor.selection);
            onPaste(event);
            // check markdown syntax
            if (checkMarkdownSyntax(text, html) && editor.selection) {
                const focus = Range.end(editor.selection);
                Promise.resolve()
                    .then(() => {
                        const madst = MarkdownDeserializer.toMdastWithEditor(
                            editor,
                            text
                        );
                        const content =
                            MarkdownDeserializer.transformWithEditor(
                                editor,
                                madst
                            );
                        editor.selection = {
                            anchor,
                            focus,
                        };
                        editor.insertFragment(content);
                    })
                    .catch(() => console.log("error"));
            }
        };

        return () => {
            editor.onPaste = onPaste;
        };
    }, [editor]);

    useContextMenuEffect(() => {
        ContextMenu.setItems(editor, createContextMenuItems(editor));
    }, editor);

    useToolbarEffect(() => {
        Toolbar.setItems(editor, createToolbarItems(editor));
    }, editor);

    useInlineToolbarEffect(() => {
        InlineToolbar.setItems(editor, createInlineToolbarItems(editor));
    }, editor);

    useSideToolbarMenuEffect((...a) => {
        SideToolbar.setItems(editor, createSideToolbarItems(editor, ...a));
    }, editor);

    useSlashToolbarEffect((value) => {
        SlashToolbar.setItems(editor, createSlashToolbarItems(editor, value));
    }, editor);

    return (
        <div className="mt-2 rounded-md border border-slate-200 p-6">
            <EditableProvider editor={editor}>
                <div className="space-y-4">
                    <ToolbarComponent editor={editor} />
                    <ContentEditable placeholder="Please enter content..." />
                </div>
            </EditableProvider>
        </div>
    );
};

export default EditorDemo;
