"use client";

import * as React from "react";

import { classNames } from "@/lib/classNames";
import { Button } from "./ui/Button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/Collapsible";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    expandButtonTitle?: string;
}

export function CodeBlockWrapper({
    expandButtonTitle = "View Code",
    className,
    children,
    ...props
}: CodeBlockProps) {
    const [isOpened, setIsOpened] = React.useState(false);

    return (
        <Collapsible
            open={isOpened}
            onOpenChange={setIsOpened}>
            <div
                className={classNames("relative overflow-hidden", className)}
                {...props}>
                <CollapsibleContent
                    forceMount
                    className={classNames(
                        "overflow-hidden",
                        !isOpened && "max-h-32"
                    )}>
                    <div
                        className={classNames(
                            "[&_pre]:max-h-[650px [&_pre]:my-0 [&_pre]:pb-[100px]",
                            !isOpened
                                ? "[&_pre]:overflow-hidden"
                                : "[&_pre]:overflow-auto]"
                        )}>
                        {children}
                    </div>
                </CollapsibleContent>
                <div
                    className={classNames(
                        "absolute flex items-center justify-center bg-gradient-to-b from-slate-900/30 to-slate-900/90 p-2",
                        isOpened ? "inset-x-0 bottom-3 h-12" : "inset-0"
                    )}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="subtle"
                            className="h-8 text-xs">
                            {isOpened ? "Collapse" : expandButtonTitle}
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </div>
        </Collapsible>
    );
}
