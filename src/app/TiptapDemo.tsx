"use client";

import "@/styles/tiptap.css";
import React, { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import {
    BubbleMenu,
    EditorContent,
    FloatingMenu,
    useEditor,
    type Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { lowlight } from "lowlight";
import { useForm } from "react-hook-form";
import {
    AiOutlineOrderedList,
    AiOutlineRedo,
    AiOutlineUnderline,
    AiOutlineUndo,
    AiOutlineUnorderedList,
} from "react-icons/ai";
import {
    MdHorizontalRule,
    MdLink,
    MdLinkOff,
    MdOutlineStrikethroughS,
} from "react-icons/md";
import {
    TbAlignCenter,
    TbAlignJustified,
    TbAlignLeft,
    TbAlignRight,
    TbBlockquote,
    TbBold,
    TbCode,
    TbItalic,
} from "react-icons/tb";
import { z } from "zod";

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
import { Loader } from "@/components/ui/Loader";
import { Separator } from "@/components/ui/Separator";
import { Paragraph as CParagraph } from "@/components/ui/typography/Paragraph";

interface LinkForm {
    url: string;
}

const schema = z.object({
    url: z.string().url().min(1, { message: "Required" }),
});

const SetLinkButton = ({ editor }: { editor: Editor }) => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<LinkForm>({
        resolver: zodResolver(schema),
    });

    const [open, setOpen] = useState(false);

    const getPreviousUrl = useCallback(() => {
        // TODO: Currently manually cast the href type because of any, maybe it will get fixed in the future
        const previousUrl = (
            editor.getAttributes("link") as unknown as {
                href: string | undefined;
            }
        ).href;

        return previousUrl;
    }, [editor]);

    const onSubmit = (data: LinkForm) => {
        editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: data.url })
            .run();
        reset();
        setOpen(false);
        return;
    };

    const handleOpen = (open: boolean) => {
        if (!open) setOpen(!open);

        const previousUrl = getPreviousUrl();

        if (previousUrl && previousUrl.length > 0) {
            setValue("url", previousUrl);
        } else {
            setValue("url", "");
        }

        setOpen(open);
    };

    return (
        <>
            <Dialog
                open={open}
                onOpenChange={handleOpen}>
                <DialogTrigger asChild>
                    <Button
                        size="sm"
                        variant="outline">
                        <MdLink
                            aria-label="Link"
                            className="h-4 w-4"
                        />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={void handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Set Link</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <Label htmlFor="url">Url</Label>
                            <Input
                                id="url"
                                type="url"
                                {...register("url")}
                                className="col-span-3"
                            />
                            {errors.url?.message && (
                                <CParagraph
                                    variant="small"
                                    className="text-red-500">
                                    {errors.url?.message}
                                </CParagraph>
                            )}
                        </div>
                        <DialogFooter>
                            <Button type="submit">Set</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

const MainMenu = ({ editor }: { editor: Editor }) => {
    return (
        <>
            <Button
                variant="outline"
                size="sm"
                onClick={() => editor.chain().focus().undo().run()}>
                <AiOutlineUndo
                    aria-label="Undo"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={() => editor.chain().focus().redo().run()}>
                <AiOutlineRedo
                    aria-label="Redo"
                    className="h-4 w-4"
                />
            </Button>

            <Separator orientation="vertical" />

            <Button
                variant={
                    editor.isActive("heading", { level: 1 })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }>
                H1
            </Button>

            <Button
                variant={
                    editor.isActive("heading", { level: 2 })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }>
                H2
            </Button>

            <Button
                variant={
                    editor.isActive("heading", { level: 3 })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }>
                H3
            </Button>

            <Button
                variant={
                    editor.isActive("heading", { level: 4 })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }>
                H4
            </Button>

            <Button
                variant={
                    editor.isActive("heading", { level: 5 })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }>
                H5
            </Button>

            <Button
                variant={
                    editor.isActive("heading", { level: 6 })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }>
                H6
            </Button>

            <Separator orientation="vertical" />

            <Button
                variant={editor.isActive("codeBlock") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                <TbCode
                    aria-label="Code Block"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={() =>
                    editor.chain().focus().setHorizontalRule().run()
                }>
                <MdHorizontalRule
                    aria-label="Horizontal Rule"
                    className="h-4 w-4"
                />
            </Button>

            <Separator orientation="vertical" />

            <Button
                variant={editor.isActive("bulletList") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <AiOutlineUnorderedList
                    aria-label="Bullet List"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={editor.isActive("orderedList") ? "subtle" : "outline"}
                size="sm"
                onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }>
                <AiOutlineOrderedList
                    aria-label="Ordered List"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={editor.isActive("blockquote") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                <TbBlockquote
                    aria-label="Blockquote"
                    className="h-4 w-4"
                />
            </Button>

            <Separator orientation="vertical" />

            <SetLinkButton editor={editor} />

            <Button
                variant="outline"
                disabled={!editor.isActive("link")}
                size="sm"
                onClick={() => editor.chain().focus().unsetLink().run()}>
                <MdLinkOff
                    aria-label="Unset Link"
                    className="h-4 w-4"
                />
            </Button>

            <Separator orientation="vertical" />

            <Button
                variant={editor.isActive("bold") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}>
                <TbBold
                    aria-label="Bold"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={editor.isActive("underline") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <AiOutlineUnderline
                    aria-label="Underline"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={editor.isActive("italic") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}>
                <TbItalic
                    aria-label="Italic"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={editor.isActive("strike") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleStrike().run()}>
                <MdOutlineStrikethroughS
                    aria-label="Strikethrough"
                    className="h-4 w-4"
                />
            </Button>

            <Separator orientation="vertical" />

            <Button
                variant={
                    editor.isActive({ textAlign: "left" })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().setTextAlign("left").run()
                }>
                <TbAlignLeft
                    aria-label="Left Align"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={
                    editor.isActive({ textAlign: "center" })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                }>
                <TbAlignCenter
                    aria-label="Center Align"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={
                    editor.isActive({ textAlign: "right" })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().setTextAlign("right").run()
                }>
                <TbAlignRight
                    aria-label="Right Align"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={
                    editor.isActive({ textAlign: "justify" })
                        ? "subtle"
                        : "outline"
                }
                size="sm"
                onClick={() =>
                    editor.chain().focus().setTextAlign("justify").run()
                }>
                <TbAlignJustified
                    aria-label="Justify Align"
                    className="h-4 w-4"
                />
            </Button>
        </>
    );
};

const SubMenu = ({ editor }: { editor: Editor }) => {
    return (
        <>
            <Button
                variant={editor.isActive("bold") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleBold().run()}>
                <TbBold
                    aria-label="Bold"
                    className="h-4 w-4"
                />
            </Button>
            <Button
                variant={editor.isActive("italic") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleItalic().run()}>
                <TbItalic
                    aria-label="Italic"
                    className="h-4 w-4"
                />
            </Button>
            <Button
                variant={editor.isActive("strike") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleStrike().run()}>
                <MdOutlineStrikethroughS
                    aria-label="Strikethrough"
                    className="h-4 w-4"
                />
            </Button>
        </>
    );
};

const TiptapDemo = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false,
                heading: {
                    levels: [1, 2, 3, 4, 5, 6],
                },
            }),
            Document,
            Paragraph,
            Text,
            Underline,
            TextStyle,
            Link.configure({
                openOnClick: false,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Placeholder.configure({
                placeholder: "Write something …",
            }),
        ],
        content: `
<h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>`,
        editorProps: {
            attributes: {
                class: "prose dark:prose-invert  m-5 focus:outline-none",
            },
        },
    });

    useEffect(() => {
        lowlight.registerLanguage("html", html);
        lowlight.registerLanguage("css", css);
        lowlight.registerLanguage("js", js);
        lowlight.registerLanguage("ts", ts);
    }, []);

    if (!editor) return <Loader />;

    return (
        <div>
            <BubbleMenu
                className="space-x-2 rounded-md bg-slate-50 p-2 drop-shadow-lg dark:bg-slate-900"
                editor={editor}
                tippyOptions={{ duration: 100 }}>
                <SubMenu editor={editor} />
            </BubbleMenu>

            <FloatingMenu
                className="space-x-2 rounded-md bg-slate-50 p-2 drop-shadow-lg dark:bg-slate-900"
                editor={editor}
                tippyOptions={{ duration: 100 }}>
                <SubMenu editor={editor} />
            </FloatingMenu>

            <div className="mt-2 rounded-md border border-slate-200  dark:border-slate-700">
                <div className="flex items-center gap-2 rounded-t-md bg-slate-50 p-2 drop-shadow dark:bg-slate-900">
                    <MainMenu editor={editor} />
                </div>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default TiptapDemo;
