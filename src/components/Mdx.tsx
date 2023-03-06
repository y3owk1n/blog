"use client";

import * as React from "react";
import { AccordionContent } from "@radix-ui/react-accordion";
import { useMDXComponent } from "next-contentlayer/hooks";

import type { NpmCommands } from "@/types/unist-builder";
import { classNames } from "@/lib/classNames";
import { Card } from "./Card";
import { CodeBlockWrapper } from "./CodeBlockWrapper";
import { ComponentExample } from "./ComponentExample";
import { ComponentSource } from "./ComponentSource";
import { CopyButton, CopyNpmCommandButton } from "./CopyButton";
import { examples } from "./examples";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/Accordion";
import { Alert } from "./ui/Alert";
import CImage from "./ui/Image";
import { Separator } from "./ui/Separator";
import { Table, Td, Th, Tr } from "./ui/Table";
import { Blockquote } from "./ui/typography/Blockquote";
import { Code } from "./ui/typography/Code";
import { H1 } from "./ui/typography/H1";
import { H2 } from "./ui/typography/H2";
import { H3 } from "./ui/typography/H3";
import { H4 } from "./ui/typography/H4";
import { H5 } from "./ui/typography/H5";
import { H6 } from "./ui/typography/H6";
import { LinkTag } from "./ui/typography/LinkTag";
import { List } from "./ui/typography/List";
import { Paragraph } from "./ui/typography/Paragraph";
import { Pre } from "./ui/typography/Pre";

const components = {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H1
            className={classNames("mt-2 scroll-m-20", className)}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H2
            className={classNames(
                "mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 first:mt-0 dark:border-b-slate-700",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H3
            className={classNames("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H4
            className={classNames("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H5
            className={classNames("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H6
            className={classNames("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
        <LinkTag {...props} />
    ),
    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <Paragraph
            variant="normal"
            className={classNames("[&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <List
            variant="unordered"
            className={classNames("my-6", className)}
            {...props}
        />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <List
            variant="ordered"
            className={classNames("my-6", className)}
            {...props}
        />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li
            className={classNames("mt-2", className)}
            {...props}
        />
    ),
    blockquote: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLElement>) => (
        <Blockquote
            className={classNames("mt-6 ", className)}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        src,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <CImage
            aspectRatioProps={{
                ratio: 16 / 9,
            }}
            imageProps={{
                className: className,
                alt: alt || "",
                src: src || "",
            }}
        />
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <Separator
            className="my-4 md:my-8"
            {...props}
        />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <Table {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => <Tr {...props} />,
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <Th {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <Td {...props} />
    ),
    pre: ({
        className,
        __rawString__,
        __npmCommand__,
        __pnpmCommand__,
        __yarnCommand__,
        __withMeta__,
        __src__,
        ...props
    }: React.HTMLAttributes<HTMLPreElement> & {
        __rawString__?: string;
        __withMeta__?: boolean;
        __src__?: string;
    } & NpmCommands) => {
        return (
            <div className="relative">
                <Pre
                    className={classNames("mt-6 mb-4", className)}
                    {...props}
                />
                {__rawString__ && !__npmCommand__ && (
                    <CopyButton
                        value={__rawString__}
                        src={__src__}
                        className={classNames(
                            "absolute top-4 right-4 border-none text-slate-300 opacity-50 hover:bg-transparent hover:opacity-100",
                            __withMeta__ && "top-20"
                        )}
                    />
                )}
                {__npmCommand__ && __yarnCommand__ && __pnpmCommand__ && (
                    <CopyNpmCommandButton
                        commands={{
                            __npmCommand__,
                            __pnpmCommand__,
                            __yarnCommand__,
                        }}
                        className={classNames(
                            "absolute top-4 right-4 border-none text-slate-300 opacity-50 hover:bg-transparent hover:opacity-100",
                            __withMeta__ && "top-20"
                        )}
                    />
                )}
            </div>
        );
    },

    code: (props: React.HTMLAttributes<HTMLElement>) => <Code {...props} />,
    CImage,
    Alert,
    Card,
    ComponentExample,
    ComponentSource,
    CodeBlockWrapper: ({ ...props }) => (
        <CodeBlockWrapper
            className="rounded-md border border-slate-100"
            {...props}
        />
    ),
    ...examples,
};

interface MdxProps {
    code: string;
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <div className="mdx">
            <Component components={components} />
        </div>
    );
}
