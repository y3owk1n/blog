import type { Editable } from "@editablejs/editor";
import type { SlashToolbarItem } from "@editablejs/plugin-toolbar/slash";
import {
    BlockquoteEditor,
    ImageEditor,
    OrderedListEditor,
    TableEditor,
    TaskListEditor,
    UnorderedListEditor,
} from "@editablejs/plugins";
import { Icon } from "@editablejs/ui";

export const createSlashToolbarItems = (editor: Editable, value: string) => {
    const items: (SlashToolbarItem & { search?: string })[] = [];
    items.push(
        {
            key: "image",
            icon: <Icon name="image" />,
            title: "Image",
            search: "image,图片",
            onSelect: () => {
                ImageEditor.open(editor);
            },
        },
        {
            key: "table",
            icon: <Icon name="table" />,
            title: "Table",
            disabled: !!TableEditor.isActive(editor),
            search: "table,表格",
            onSelect: () => {
                TableEditor.insert(editor);
            },
        },
        {
            key: "blockquote",
            icon: <Icon name="blockquote" />,
            title: "Blockquote",
            search: "blockquote,引用",
            onSelect: () => {
                BlockquoteEditor.toggle(editor);
            },
        },
        {
            key: "unorderedList",
            icon: <Icon name="unorderedList" />,
            title: "Unordered list",
            search: "list,unordered,无序列表",
            onSelect: () => {
                UnorderedListEditor.toggle(editor);
            },
        },
        {
            key: "orderedList",
            icon: <Icon name="orderedList" />,
            title: "Ordered list",
            search: "list,ordered,有序列表",
            onSelect: () => {
                OrderedListEditor.toggle(editor);
            },
        },
        {
            key: "taskList",
            icon: <Icon name="taskList" />,
            title: "Tasklist",
            search: "list,task,任务列表",
            onSelect: () => {
                TaskListEditor.toggle(editor);
            },
        }
    );

    return items.filter((item) => {
        if ("content" in item || "type" in item) return true;
        if (item.disabled) return false;
        return item.search?.includes(value);
    });
};
