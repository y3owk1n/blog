import type { Node } from "unist";

export interface UnistNode extends Node {
    type: string;
    name?: string;
    tagName?: string;
    value?: string;
    url?: string;
    properties?: {
        __rawString__?: string;
        __className__?: string;
        className?: string[];
        [key: string]: unknown;
    } & NpmCommands;
    attributes?: {
        name: string;
        value: unknown;
        type?: string;
    }[];
    children?: UnistNode[];
    __rawString__?: string;
    __src__?: string;
}

export interface UnistTree extends Node {
    children: UnistNode[];
    type: string;
}

export interface NpmCommands {
    __npmCommand__?: string;
    __yarnCommand__?: string;
    __pnpmCommand__?: string;
}
