"use client";

import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { NpmCommands } from "@/types/unist-builder";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/Accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import { classNames } from "@/lib/classNames";
import { Callout } from "./Callout";
import { CopyButton, CopyNpmCommandButton } from "./CopyButton";
import { Card } from "./Card";
import { ComponentExample } from "./ComponentExample";
import { ComponentSource } from "./ComponentSource";
import { CodeBlockWrapper } from "./CodeBlockWrapper";
import { examples } from "./examples";

const components = {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={classNames(
                "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={classNames(
                "mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={classNames(
                "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={classNames(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={classNames(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={classNames(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={classNames(
                "font-medium text-slate-900 underline underline-offset-4 ",
                className
            )}
            {...props}
        />
    ),
    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={classNames(
                "leading-7 [&:not(:first-child)]:mt-6",
                className
            )}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul
            className={classNames("my-6 ml-6 list-disc", className)}
            {...props}
        />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol
            className={classNames("my-6 ml-6 list-decimal", className)}
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
        <blockquote
            className={classNames(
                "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600",
                className
            )}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            className={classNames(
                "rounded-md border border-slate-200",
                className
            )}
            alt={alt}
            {...props}
        />
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <hr
            className="my-4 border-slate-200  md:my-8"
            {...props}
        />
    ),
    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
            <table
                className={classNames("w-full", className)}
                {...props}
            />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={classNames(
                "m-0 border-t border-slate-300 p-0 even:bg-slate-100",
                className
            )}
            {...props}
        />
    ),
    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={classNames(
                "border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={classNames(
                "border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
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
                <pre
                    className={classNames(
                        "mt-6 mb-4 overflow-x-auto rounded-lg border border-slate-900 bg-slate-900 py-4 px-2 ",
                        className
                    )}
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
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={classNames(
                "relative rounded py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 ",
                className
            )}
            {...props}
        />
    ),
    Image,
    Callout,
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
