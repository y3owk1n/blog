"use client";

import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { twMerge } from "tailwind-merge";

import { ImageWithAspectRatio } from "./ui/ImageWithAspectRatio";
import { Separator } from "./ui/Separator";
import { Blockquote } from "./ui/typography/Blockquote";
import { Code } from "./ui/typography/Code";
import { LinkTag } from "./ui/typography/LinkTag";
import { List } from "./ui/typography/List";
import { Pre } from "./ui/typography/Pre";

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={twMerge(
                "mt-6 scroll-m-20 text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={twMerge(
                "mt-6 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={twMerge(
                "mt-4 scroll-m-20 text-xl font-bold tracking-tight text-foreground sm:text-2xl",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={twMerge(
                "mt-4 scroll-m-20 text-lg font-bold tracking-tight text-foreground sm:text-xl",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={twMerge(
                "text-md mt-4 scroll-m-20 font-bold tracking-tight text-foreground sm:text-lg",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={twMerge(
                "mt-4 scroll-m-20 text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
                className
            )}
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
        <p
            className={twMerge(
                "leading-normal [&:not(:first-child)]:mt-6",
                className
            )}
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
};

interface MdxProps {
    code: string;
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <div className="mdx text-justify">
            <Component components={components} />
        </div>
    );
}
