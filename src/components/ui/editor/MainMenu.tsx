import { type Editor } from "@tiptap/react";
import {
    AiOutlineOrderedList,
    AiOutlineRedo,
    AiOutlineUnderline,
    AiOutlineUndo,
    AiOutlineUnorderedList,
} from "react-icons/ai";
import {
    MdHorizontalRule,
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

import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import SetLinkButton from "./SetLinkButton";

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

export default MainMenu;
