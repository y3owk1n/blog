import type { Editable } from "@editablejs/editor";
import { useEditable } from "@editablejs/editor";
import { Grid } from "@editablejs/models";
import { HistoryEditor } from "@editablejs/plugin-history";
import type { ToolbarItem } from "@editablejs/plugin-toolbar";
import type { AlignKeys, HeadingType, MarkFormat } from "@editablejs/plugins";
import {
    AlignEditor,
    BackgroundColorEditor,
    BlockquoteEditor,
    CodeBlockEditor,
    FontColorEditor,
    FontSizeEditor,
    HeadingEditor,
    HrEditor,
    ImageEditor,
    LeadingEditor,
    LinkEditor,
    MarkEditor,
    OrderedListEditor,
    TableEditor,
    TaskListEditor,
    UnorderedListEditor,
} from "@editablejs/plugins";
import type { IconMap } from "@editablejs/ui";
import { Icon } from "@editablejs/ui";
import type { FC } from "react";
import { useCallback } from "react";

export const AlignDropdown: FC = () => {
    const editor = useEditable();
    const getAlign = useCallback(() => {
        const value = AlignEditor.queryActive(editor);
        switch (value) {
            case "center":
                return "alignCenter";
            case "right":
                return "alignRight";
            case "justify":
                return "alignJustify";
        }
        return "alignLeft";
    }, [editor]);
    const name: keyof typeof IconMap = getAlign();
    return <Icon name={name} />;
};

const marks: MarkFormat[] = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "code",
    "sub",
    "sup",
];

export const defaultFontColor = "#262626";
export const defaultBackgroundColor = "transparent";

export const createToolbarItems = (editor: Editable) => {
    const items: ToolbarItem[] = [
        {
            type: "button",
            title: "Undo",
            disabled: !HistoryEditor.canUndo(editor),
            icon: <Icon name="undo" />,
            onToggle: () => {
                HistoryEditor.undo(editor);
            },
        },
        {
            type: "button",
            title: "Redo",
            disabled: !HistoryEditor.canRedo(editor),
            icon: <Icon name="redo" />,
            onToggle: () => {
                HistoryEditor.redo(editor);
            },
        },
    ];
    const markItems: ToolbarItem[] = marks.map((mark) => ({
        type: "button",
        title: `${mark}`,
        active: MarkEditor.isActive(editor, mark),
        icon: <Icon name={mark} />,
        onToggle: () => {
            MarkEditor.toggle(editor, mark);
        },
    }));
    items.push("separator", ...markItems);
    items.push(
        "separator",
        {
            type: "color-picker",
            defaultValue: "#F5222D",
            defaultColor: {
                color: defaultFontColor,
                title: "Default",
            },
            title: "Font color",
            children: <Icon name="fontColor" />,
            onSelect: (color) => {
                FontColorEditor.toggle(editor, color);
            },
        },
        {
            type: "color-picker",
            defaultValue: "#FADB14",
            defaultColor: {
                color: defaultBackgroundColor,
                title: "Default",
            },
            title: "Font background",
            children: <Icon name="backgroundColor" />,
            onSelect: (color) => {
                BackgroundColorEditor.toggle(editor, color);
            },
        }
    );
    items.push(
        "separator",
        {
            type: "dropdown",
            title: "Font size",
            items: [
                {
                    value: "14px",
                },
                {
                    value: "16px",
                },
                {
                    value: "20px",
                },
                {
                    value: "22px",
                },
                {
                    value: "24px",
                },
                {
                    value: "28px",
                },
            ],
            value: FontSizeEditor.queryActive(editor) ?? "14px",
            onSelect: (value) => {
                FontSizeEditor.toggle(editor, value);
            },
        },
        {
            type: "dropdown",
            title: "Heading",
            items: [
                {
                    value: "paragraph",
                    content: "Paragraph",
                },
                {
                    value: "heading-one",
                    content: "Heading 1",
                },
                {
                    value: "heading-two",
                    content: "Heading 2",
                },
                {
                    value: "heading-three",
                    content: "Heading 3",
                },
                {
                    value: "heading-four",
                    content: "Heading 4",
                },
                {
                    value: "heading-five",
                    content: "Heading 5",
                },
                {
                    value: "heading-six",
                    content: "Heading 6",
                },
            ],
            value: HeadingEditor.queryActive(editor) ?? "paragraph",
            onSelect: (value) => {
                HeadingEditor.toggle(editor, value as HeadingType);
            },
        }
    );
    items.push(
        "separator",
        {
            type: "button",
            title: "Link",
            active: LinkEditor.isActive(editor),
            onToggle: () => {
                LinkEditor.open(editor);
            },
            icon: <Icon name="link" />,
        },
        {
            type: "button",
            title: "Image",
            active: ImageEditor.isActive(editor),
            onToggle: () => {
                ImageEditor.open(editor);
            },
            icon: <Icon name="image" />,
        },
        {
            type: "button",
            title: "Blockquote",
            active: BlockquoteEditor.isActive(editor),
            onToggle: () => {
                BlockquoteEditor.toggle(editor);
            },
            icon: <Icon name="blockquote" />,
        },
        {
            type: "button",
            title: "Unordered list",
            active: !!UnorderedListEditor.queryActive(editor),
            onToggle: () => {
                UnorderedListEditor.toggle(editor);
            },
            icon: <Icon name="unorderedList" />,
        },
        {
            type: "button",
            title: "Ordered list",
            active: !!OrderedListEditor.queryActive(editor),
            onToggle: () => {
                OrderedListEditor.toggle(editor);
            },
            icon: <Icon name="orderedList" />,
        },
        {
            type: "button",
            title: "Task list",
            active: !!TaskListEditor.queryActive(editor),
            onToggle: () => {
                TaskListEditor.toggle(editor);
            },
            icon: <Icon name="taskList" />,
        },
        {
            type: "button",
            title: "Table",
            disabled: !!TableEditor.isActive(editor),
            onToggle: () => {
                TableEditor.insert(editor);
            },
            icon: <Icon name="table" />,
        },
        "separator",
        {
            type: "dropdown",
            title: "Align",
            items: [
                {
                    value: "left",
                    content: (
                        <div className="flex items-center gap-1">
                            <Icon name="alignLeft" />
                            Align left
                        </div>
                    ),
                },
                {
                    value: "center",
                    content: (
                        <div className="flex items-center gap-1">
                            <Icon name="alignCenter" />
                            Align center
                        </div>
                    ),
                },
                {
                    value: "right",
                    content: (
                        <div className="flex items-center gap-1">
                            <Icon name="alignRight" />
                            Align right
                        </div>
                    ),
                },
                {
                    value: "justify",
                    content: (
                        <div className="flex items-center gap-1">
                            <Icon name="alignJustify" />
                            Align justify
                        </div>
                    ),
                },
            ],
            children: <AlignDropdown />,
            value: AlignEditor.queryActive(editor),
            onSelect: (value) => {
                AlignEditor.toggle(editor, value as AlignKeys);
            },
        },
        {
            type: "dropdown",
            title: "Leading",
            items: [
                {
                    value: "default",
                    content: "Default",
                },
                {
                    value: "1",
                },
                {
                    value: "1.15",
                },
                {
                    value: "1.5",
                },
                {
                    value: "2",
                },
                {
                    value: "3",
                },
            ],
            value: LeadingEditor.queryActive(editor) ?? "default",
            children: <Icon name="leading" />,
            onSelect: (value) => {
                LeadingEditor.toggle(
                    editor,
                    value === "default" ? undefined : value
                );
            },
        },
        {
            type: "button",
            title: "Horizontal Line",
            active: HrEditor.isActive(editor),
            onToggle: () => {
                HrEditor.insert(editor);
            },
            icon: <Icon name="hr" />,
        },
        "separator",
        {
            type: "button",
            title: "Code block",
            active: CodeBlockEditor.isActive(editor),
            onToggle: () => {
                CodeBlockEditor.insert(editor);
            },
            icon: <Icon name="codeBlock" />,
        }
    );

    const grid = Grid.above(editor);
    if (grid) {
        items.push(
            "separator",
            {
                type: "button",
                title: "Merge Cell",
                disabled: !Grid.canMerge(editor, grid),
                onToggle: () => {
                    Grid.mergeCell(editor, grid);
                },
                icon: <Icon name="tableMerge" />,
            },
            {
                type: "button",
                title: "Split cell",
                icon: <Icon name="tableSplit" />,
                disabled: !Grid.canSplit(editor, grid),
                onToggle: () => {
                    Grid.splitCell(editor, grid);
                },
            }
        );
    }
    return items;
};
