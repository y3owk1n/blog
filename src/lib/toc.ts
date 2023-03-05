import type { UnistNode } from "@/types/unist-builder";
import { toc } from "mdast-util-toc";
import type { BlockContent, DefinitionContent } from "mdast";
import type { ListItem } from "mdast-util-toc/lib/contents";
import type { Node } from "mdast-util-toc/lib/search";
import { remark } from "remark";
import { visit } from "unist-util-visit";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node: UnistNode) {
    const p: string[] = [];
    visit(node, (node) => {
        if (!textTypes.includes(node.type) || !node.value) return;
        p.push(node.value);
    });
    return p.join(``);
}

interface File {
    data: Items;
}

interface Item {
    title: string;
    url: string;
    items?: Item[];
}

interface Items {
    items?: Item[];
}

function getItems(
    node: ListItem | UnistNode | BlockContent | DefinitionContent | undefined,
    current: Item
): Item {
    if (!node) {
        return {
            title: "",
            url: "",
        };
    }

    if (node.type === "paragraph") {
        visit(node, (item) => {
            if (item.type === "link" && item.url) {
                current.url = item.url;
                current.title = flattenNode(node);
            }

            if (item.type === "text") {
                current.title = flattenNode(node);
            }
        });

        return current;
    }

    if (node.type === "list") {
        current.items = node.children?.map((i) =>
            getItems(i, {
                title: "",
                url: "",
            })
        );

        return current;
    } else if (node.type === "listItem") {
        if (node.children) {
            const heading = getItems(node.children[0], {
                title: "",
                url: "",
            });

            if (node.children && node.children.length > 1) {
                getItems(node.children[1], heading);
            }

            return heading;
        }
    }

    return {
        title: "",
        url: "",
    };
}

const getToc = () => (node: Node, file: File) => {
    const table = toc(node);
    if (table && table.map) {
        file.data = getItems(table.map, {
            title: "",
            url: "",
        });
    }
};

export type TableOfContents = Items;

export async function getTableOfContents(
    content: string
): Promise<TableOfContents> {
    const result = await remark().use(getToc).process(content);

    return result.data;
}
