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
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import type { Level, RichTextEditorToolbar } from "./RichTextEditor";
import SetLinkButton from "./SetLinkButton";

const ToolbarMenu = ({
    editor,
    toolbarConfig,
    headingsArray,
}: {
    editor: Editor;
    toolbarConfig: RichTextEditorToolbar;
    headingsArray: Level[];
}) => {
    return (
        <>
            {(toolbarConfig.redo || toolbarConfig.undo) && (
                <ButtonGroup>
                    {toolbarConfig.redo && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => editor.chain().focus().undo().run()}>
                            <AiOutlineUndo
                                aria-label="Undo"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.undo && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => editor.chain().focus().redo().run()}>
                            <AiOutlineRedo
                                aria-label="Redo"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}
                </ButtonGroup>
            )}

            <ButtonGroup>
                {headingsArray.map((level) => (
                    <Button
                        key={level}
                        variant={
                            editor.isActive("heading", { level })
                                ? "subtle"
                                : "outline"
                        }
                        size="sm"
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level })
                                .run()
                        }>
                        {`H${level}`}
                    </Button>
                ))}
            </ButtonGroup>

            {(toolbarConfig.codeBlock ||
                toolbarConfig.horizontalRule ||
                toolbarConfig.blockquote) && (
                <ButtonGroup>
                    {toolbarConfig.codeBlock && (
                        <Button
                            variant={
                                editor.isActive("codeBlock")
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleCodeBlock().run()
                            }>
                            <TbCode
                                aria-label="Code Block"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.horizontalRule && (
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
                    )}

                    {toolbarConfig.blockquote && (
                        <Button
                            variant={
                                editor.isActive("blockquote")
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleBlockquote().run()
                            }>
                            <TbBlockquote
                                aria-label="Blockquote"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}
                </ButtonGroup>
            )}

            {(toolbarConfig.bulletList || toolbarConfig.orderedList) && (
                <ButtonGroup>
                    {toolbarConfig.bulletList && (
                        <Button
                            variant={
                                editor.isActive("bulletList")
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }>
                            <AiOutlineUnorderedList
                                aria-label="Bullet List"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.orderedList && (
                        <Button
                            variant={
                                editor.isActive("orderedList")
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleOrderedList().run()
                            }>
                            <AiOutlineOrderedList
                                aria-label="Ordered List"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}
                </ButtonGroup>
            )}
            {toolbarConfig.link && (
                <ButtonGroup>
                    <SetLinkButton editor={editor} />

                    <Button
                        variant="outline"
                        disabled={!editor.isActive("link")}
                        size="sm"
                        onClick={() =>
                            editor.chain().focus().unsetLink().run()
                        }>
                        <MdLinkOff
                            aria-label="Unset Link"
                            className="h-4 w-4"
                        />
                    </Button>
                </ButtonGroup>
            )}

            {(toolbarConfig.bold ||
                toolbarConfig.underline ||
                toolbarConfig.italic ||
                toolbarConfig.strike) && (
                <ButtonGroup>
                    {toolbarConfig.bold && (
                        <Button
                            variant={
                                editor.isActive("bold") ? "subtle" : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }>
                            <TbBold
                                aria-label="Bold"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.underline && (
                        <Button
                            variant={
                                editor.isActive("underline")
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }>
                            <AiOutlineUnderline
                                aria-label="Underline"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.italic && (
                        <Button
                            variant={
                                editor.isActive("italic") ? "subtle" : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }>
                            <TbItalic
                                aria-label="Italic"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.strike && (
                        <Button
                            variant={
                                editor.isActive("strike") ? "subtle" : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }>
                            <MdOutlineStrikethroughS
                                aria-label="Strikethrough"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}
                </ButtonGroup>
            )}

            {(toolbarConfig.textJustifyAlign ||
                toolbarConfig.textRightAlign ||
                toolbarConfig.textCenterAlign ||
                toolbarConfig.textLeftAlign) && (
                <ButtonGroup>
                    {toolbarConfig.textLeftAlign && (
                        <Button
                            variant={
                                editor.isActive({ textAlign: "left" })
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("left")
                                    .run()
                            }>
                            <TbAlignLeft
                                aria-label="Left Align"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.textCenterAlign && (
                        <Button
                            variant={
                                editor.isActive({ textAlign: "center" })
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("center")
                                    .run()
                            }>
                            <TbAlignCenter
                                aria-label="Center Align"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.textRightAlign && (
                        <Button
                            variant={
                                editor.isActive({ textAlign: "right" })
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("right")
                                    .run()
                            }>
                            <TbAlignRight
                                aria-label="Right Align"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}

                    {toolbarConfig.textJustifyAlign && (
                        <Button
                            variant={
                                editor.isActive({ textAlign: "justify" })
                                    ? "subtle"
                                    : "outline"
                            }
                            size="sm"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("justify")
                                    .run()
                            }>
                            <TbAlignJustified
                                aria-label="Justify Align"
                                className="h-4 w-4"
                            />
                        </Button>
                    )}
                </ButtonGroup>
            )}
        </>
    );
};

export default ToolbarMenu;
