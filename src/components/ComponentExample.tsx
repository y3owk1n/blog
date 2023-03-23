"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

import { CopyButton, CopyWithClassNames } from "./CopyButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
    extractClassname?: boolean;
    extractedClassNames?: string;
    align?: "center" | "start" | "end";
}

interface Element extends React.ReactElement {
    props: {
        value: string;
        __rawString__: string;
        "data-rehype-pretty-code-fragment": string;
        children: React.ReactNode;
    };
}

export function ComponentExample({
    children,
    className,
    extractedClassNames,
    align = "center",
    ...props
}: ComponentExampleProps) {
    const Childrens = React.Children.toArray(children);

    const [Example, Code, ...Children] = Childrens as Element[];

    const codeString: string | undefined = React.useMemo(() => {
        if (
            typeof Code?.props["data-rehype-pretty-code-fragment"] !==
            "undefined"
        ) {
            const [String] = React.Children.toArray(
                Code.props.children
            ) as Element[];

            if (String) return String.props.__rawString__;
        }
    }, [Code]);

    return (
        <div
            className={twMerge(
                "group relative my-4 flex flex-col space-y-2",
                className
            )}
            {...props}>
            <Tabs
                defaultValue="preview"
                className="mr-auto w-full">
                <div className="flex items-center justify-between">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    {extractedClassNames ? (
                        <CopyWithClassNames
                            value={codeString || ""}
                            classNames={extractedClassNames}
                            className="border-none"
                        />
                    ) : (
                        codeString && <CopyButton value={codeString} />
                    )}
                </div>
                <TabsContent
                    value="preview"
                    className="p-0">
                    <div
                        className={twMerge(
                            "flex justify-center p-10",
                            align === "center" ? "items-center" : "",
                            align === "start" ? "items-start" : "",
                            align === "end" ? "items-end" : ""
                        )}>
                        {Example}
                    </div>
                </TabsContent>
                <TabsContent
                    value="code"
                    className="border-none p-0">
                    <div className="flex flex-col space-y-4">
                        <div className="relative w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                            {Code}
                        </div>
                        {Children && (
                            <div className="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                                {Children}
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
