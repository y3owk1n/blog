import {
    defineDocumentType,
    makeSource,
    type ComputedFields,
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist-builder";

const computedFields: ComputedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `post/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        coverImage: {
            type: "string",
            required: true,
        },
        date: {
            type: "date",
            required: true,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "./src/content",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm, codeImport],
        rehypePlugins: [
            rehypeSlug,
            () => (tree: UnistTree) => {
                visit(tree, (node: UnistNode) => {
                    if (node?.type === "element" && node?.tagName === "pre") {
                        const [codeEl] = node.children as UnistNode[];

                        if (codeEl) {
                            if (codeEl.tagName !== "code") {
                                return;
                            }
                            node.__rawString__ = codeEl.children?.[0]?.value;
                        }

                        node.__src__ = node.properties?.__src__ as string;
                    }
                });
            },
            [
                rehypePrettyCode,
                {
                    onVisitLine(node: UnistNode) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children && node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node: UnistNode) {
                        if (node.properties && node.properties.className) {
                            node.properties.className.push("line--highlighted");
                        }
                    },
                    onVisitHighlightedWord(node: UnistNode) {
                        if (node.properties && node.properties.className) {
                            node.properties.className = ["word--highlighted"];
                        }
                    },
                },
            ],
            () => (tree: UnistTree) => {
                visit(tree, (node: UnistNode) => {
                    if (
                        node?.type === "element" &&
                        node?.tagName === "div" &&
                        node.properties &&
                        node.children
                    ) {
                        if (
                            !(
                                "data-rehype-pretty-code-fragment" in
                                node.properties
                            )
                        ) {
                            return;
                        }

                        const preElement = node.children.at(-1);
                        if (preElement) {
                            if (
                                preElement.tagName !== "pre" ||
                                !preElement.properties
                            ) {
                                return;
                            }

                            preElement.properties["__withMeta__"] =
                                node.children.at(0)?.tagName === "div";
                            preElement.properties["__rawString__"] =
                                node.__rawString__;

                            if (node.__src__) {
                                preElement.properties["__src__"] = node.__src__;
                            }
                        }
                    }
                });
            },
        ],
    },
});
