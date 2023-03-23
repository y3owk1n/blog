import type { BlockContent, DefinitionContent } from "mdast";
import { toc } from "mdast-util-toc";
import type { ListItem } from "mdast-util-toc/lib/contents";
import type { Node } from "mdast-util-toc/lib/search";
import { remark } from "remark";
import { visit } from "unist-util-visit";

import type { UnistNode } from "@/types/unist-builder";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

/**
 * Function to flatten a UnistNode into a string
 * @param {UnistNode} node - The UnistNode to flatten
 * @returns {string} - The flattened string
 */
function flattenNode(node: UnistNode): string {
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

/**
 * Function to get items from a list
 * @param {ListItem | UnistNode | BlockContent | DefinitionContent | undefined} node - The node to get items from
 * @param {Item} current - The current item
 * @returns {Item} - The item
 */
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

/**
 * Asynchronously generate a table of contents from a given content string
 * @param {string} content - The content string to generate the table of contents from
 * @returns {Promise<TableOfContents>} - The generated table of contents
 */
export async function getTableOfContents(
    content: string
): Promise<TableOfContents> {
    const result = await remark().use(getToc).process(content);

    return result.data;
}
