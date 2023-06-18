import "@/styles/tiptap.css";

import React, { useCallback, useState } from "react";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { type Editor } from "@tiptap/react";
import { MdLink } from "react-icons/md";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

import { getHotkeyHandler } from "@/lib/hooks/useHotkeys";
import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Paragraph as CParagraph } from "@/components/ui/typography/Paragraph";
import { Checkbox } from "../Checkbox";

const SetLinkButton = ({
    editor,
    disabled,
}: {
    editor: Editor;
    disabled: boolean;
}) => {
    const [open, setOpen] = useState(false);

    const [url, setUrl] = useState("");
    const [newTab, setNewTab] = useState<CheckedState>(true);
    const [error, setError] = useState("");

    const getPreviousUrl = useCallback(() => {
        // TODO: Currently manually cast the href type because of any, maybe it will get fixed in the future
        const previousUrl = (
            editor.getAttributes("link") as unknown as {
                href: string | undefined;
            }
        ).href;

        return previousUrl;
    }, [editor]);

    const handleSubmit = useCallback(
        (url: string, newTab: boolean) => {
            const urlSchema = z.string().url();
            setError("");

            const parsedUrl = urlSchema.safeParse(url);

            if (!parsedUrl.success) {
                const validationError = fromZodError(parsedUrl.error);
                setError(validationError.message);
                return;
            }

            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: url, target: newTab ? "_blank" : null })
                .run();

            setUrl("");
            setError("");
            setOpen(false);
            return;
        },
        [editor]
    );

    const handleOpen = (open: boolean) => {
        setError("");
        if (!open) setOpen(!open);

        const previousUrl = getPreviousUrl();

        if (previousUrl && previousUrl.length > 0) {
            setUrl(previousUrl);
        } else {
            setUrl("");
        }

        setOpen(open);
    };

    return (
        <>
            <Dialog
                open={open}
                onOpenChange={handleOpen}>
                <DialogTrigger
                    disabled={disabled}
                    asChild>
                    <Button
                        size="sm"
                        disabled={disabled}
                        variant="outline">
                        <MdLink
                            aria-label="Link"
                            className="h-4 w-4"
                        />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Set Link</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Label htmlFor="url">Url</Label>
                        <Input
                            id="url"
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="col-span-3"
                            onKeyDown={getHotkeyHandler([
                                [
                                    "Enter",
                                    () => handleSubmit(url, newTab as boolean),
                                ],
                            ])}
                        />
                        <div className="flex gap-4">
                            <div className="items-top flex space-x-2">
                                <Checkbox
                                    id="newTab"
                                    checked={newTab}
                                    onCheckedChange={(e) => setNewTab(e)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <Label htmlFor="newTab">
                                        Open in new tab
                                    </Label>
                                </div>
                            </div>
                        </div>
                        {error && error.length > 0 && (
                            <CParagraph
                                variant="small"
                                className="text-red-500">
                                {error}
                            </CParagraph>
                        )}
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            onClick={() =>
                                handleSubmit(url, newTab as boolean)
                            }>
                            Set
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SetLinkButton;
