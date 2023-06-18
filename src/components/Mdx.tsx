"use client";

import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { twMerge } from "tailwind-merge";

import { Alert } from "./ui/Alert";
import { ImageWithAspectRatio } from "./ui/ImageWithAspectRatio";
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
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H1
            className={twMerge("mt-2 scroll-m-20", className)}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H2
            className={twMerge(
                "mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 first:mt-0 dark:border-b-slate-700",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H3
            className={twMerge("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H4
            className={twMerge("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H5
            className={twMerge("mt-8 scroll-m-20", className)}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <H6
            className={twMerge("mt-8 scroll-m-20", className)}
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
            className={twMerge("[&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <List
            variant="unordered"
            className={twMerge("my-6", className)}
            {...props}
        />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <List
            variant="ordered"
            className={twMerge("my-6", className)}
            {...props}
        />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li
            className={twMerge("mt-2", className)}
            {...props}
        />
    ),
    blockquote: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLElement>) => (
        <Blockquote
            className={twMerge("mt-6 ", className)}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        src,
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <ImageWithAspectRatio
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
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        return (
            <div className="relative">
                <Pre
                    className={twMerge("mb-4 mt-6", className)}
                    {...props}
                />
            </div>
        );
    },

    code: (props: React.HTMLAttributes<HTMLElement>) => <Code {...props} />,
    ImageWithAspectRatio,
    Alert,
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
