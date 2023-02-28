import { Editable } from "@editablejs/editor";
import { Editor, Grid, Range, Transforms } from "@editablejs/models";
import { TitleEditor } from "@editablejs/plugin-title";
import type { ToolbarItem } from "@editablejs/plugin-toolbar";
import type { AlignKeys, MarkFormat } from "@editablejs/plugins";
import {
    AlignEditor,
    BackgroundColorEditor,
    FontColorEditor,
    HeadingEditor,
    ImageEditor,
    LinkEditor,
    MarkEditor,
    OrderedListEditor,
    TableEditor,
    TaskListEditor,
    UnorderedListEditor,
} from "@editablejs/plugins";
import { Icon } from "@editablejs/ui";
import {
    AlignDropdown,
    defaultBackgroundColor,
    defaultFontColor,
} from "./ToolbarItems";

const marks: MarkFormat[] = ["bold", "italic", "underline", "strikethrough"];

export const createInlineToolbarItems = (editor: Editable) => {
    const items: ToolbarItem[] = [];
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    if (isCollapsed || Editable.isReadOnly(editor)) {
        if (isCollapsed) {
            items.push({
                type: "button",
                children: "Select",
                onToggle: () => {
                    editor.selectWord();
                },
            });
            items.push({
                type: "button",
                children: "Select all",
                onToggle: () => {
                    Transforms.select(editor, Editor.range(editor, []));
                },
            });
        } else if (Editable.isReadOnly(editor)) {
            items.push({
                type: "button",
                children: "Copy",
                onToggle() {
                    editor.copy();
                },
            });
        }
        return items;
    }
    if (TitleEditor.isFocused(editor)) {
        items.push(
            {
                type: "button",
                icon: <Icon name="link" />,
                title: "Link",
                onToggle: () => {
                    LinkEditor.open(editor);
                },
            },
            {
                type: "button",
                icon: <Icon name="alignLeft" />,
                title: "Align left",
                onToggle: () => {
                    AlignEditor.toggle(editor, "left");
                },
            },
            {
                type: "button",
                icon: <Icon name="alignCenter" />,
                title: "Align center",
                onToggle: () => {
                    AlignEditor.toggle(editor, "center");
                },
            },
            {
                type: "button",
                icon: <Icon name="alignRight" />,
                title: "Align right",
                onToggle: () => {
                    AlignEditor.toggle(editor, "right");
                },
            },
            {
                type: "button",
                icon: <Icon name="alignJustify" />,
                title: "Align justify",
                onToggle: () => {
                    AlignEditor.toggle(editor, "justify");
                },
            }
        );
        return items;
    }
    const markItems: ToolbarItem[] = marks.map((mark) => ({
        type: "button",
        active: MarkEditor.isActive(editor, mark),
        icon: <Icon name={mark} />,
        title: `${mark}`,
        onToggle: () => {
            MarkEditor.toggle(editor, mark);
        },
    }));
    items.push(...markItems);
    items.push(
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
                title: "No color",
            },
            title: "Font background",
            children: <Icon name="backgroundColor" />,
            onSelect: (color) => {
                BackgroundColorEditor.toggle(editor, color);
            },
        },
        "separator",
        {
            type: "button",
            active: HeadingEditor.queryActive(editor) === "heading-one",
            icon: <Icon name="headingOne" />,
            title: "Heading 1",
            onToggle: () => {
                HeadingEditor.toggle(editor, "heading-one");
            },
        },
        {
            type: "button",
            active: HeadingEditor.queryActive(editor) === "heading-two",

            title: "Heading 2",
            icon: <Icon name="headingTwo" />,
            onToggle: () => {
                HeadingEditor.toggle(editor, "heading-two");
            },
        },
        {
            type: "button",
            active: HeadingEditor.queryActive(editor) === "heading-three",
            title: "Heading 3",
            icon: <Icon name="headingThree" />,
            onToggle: () => {
                HeadingEditor.toggle(editor, "heading-three");
            },
        }
    );
    items.push(
        "separator",
        {
            type: "button",
            active: ImageEditor.isActive(editor),
            title: "Image",
            onToggle: () => {
                ImageEditor.open(editor);
            },
            icon: <Icon name="image" />,
        },
        {
            type: "button",
            active: !!UnorderedListEditor.queryActive(editor),
            title: "Unordered list",
            onToggle: () => {
                UnorderedListEditor.toggle(editor);
            },
            icon: <Icon name="unorderedList" />,
        },
        {
            type: "button",
            active: !!OrderedListEditor.queryActive(editor),
            title: "Ordered list",
            onToggle: () => {
                OrderedListEditor.toggle(editor);
            },
            icon: <Icon name="orderedList" />,
        },
        {
            type: "button",
            active: !!TaskListEditor.queryActive(editor),
            title: "Task list",
            onToggle: () => {
                TaskListEditor.toggle(editor);
            },
            icon: <Icon name="taskList" />,
        },
        {
            type: "button",
            disabled: !!TableEditor.isActive(editor),
            title: "Table",
            onToggle: () => {
                TableEditor.insert(editor);
            },
            icon: <Icon name="table" />,
        },
        {
            type: "dropdown",
            items: [
                {
                    value: "left",
                    content: "Align left",
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
            title: "Align",
            value: AlignEditor.queryActive(editor),
            onSelect: (value) => {
                AlignEditor.toggle(editor, value as AlignKeys);
            },
        }
    );

    const grid = Grid.above(editor);
    if (grid) {
        items.push(
            "separator",
            {
                type: "button",
                title: "Merge cell",
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
