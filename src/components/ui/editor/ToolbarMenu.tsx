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
    TbSubscript,
    TbSuperscript,
} from "react-icons/tb";

import { Button } from "@/components/ui/Button";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Toggle } from "@/components/ui/Toggle";
import type { Level, RichTextEditorToolbar } from "./RichTextEditor";
import SetLinkButton from "./SetLinkButton";

const ToolbarMenu = ({
    disabled,
    editor,
    toolbarConfig,
    headingsArray,
}: {
    editor: Editor;
    disabled: boolean;
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
                            disabled={!editor.can().undo() || disabled}
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
                            disabled={!editor.can().redo() || disabled}
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
                    <Toggle
                        key={level}
                        pressed={editor.isActive("heading", { level })}
                        variant="outline"
                        disabled={disabled}
                        size="sm"
                        aria-label={`Toggle Heading ${level}`}
                        onPressedChange={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level })
                                .run()
                        }>
                        {`H${level}`}
                    </Toggle>
                ))}
            </ButtonGroup>

            {(toolbarConfig.codeBlock ||
                toolbarConfig.horizontalRule ||
                toolbarConfig.blockquote) && (
                <ButtonGroup>
                    {toolbarConfig.codeBlock && (
                        <Toggle
                            pressed={editor.isActive("codeBlock")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Code Block"
                            onPressedChange={() =>
                                editor.chain().focus().toggleCodeBlock().run()
                            }>
                            <TbCode className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.horizontalRule && (
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={disabled}
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
                        <Toggle
                            pressed={editor.isActive("blockquote")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Blockquote"
                            onPressedChange={() =>
                                editor.chain().focus().toggleBlockquote().run()
                            }>
                            <TbBlockquote className="h-4 w-4" />
                        </Toggle>
                    )}
                </ButtonGroup>
            )}

            {(toolbarConfig.bulletList || toolbarConfig.orderedList) && (
                <ButtonGroup>
                    {toolbarConfig.bulletList && (
                        <Toggle
                            pressed={editor.isActive("bulletList")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Bullet List"
                            onPressedChange={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }>
                            <AiOutlineUnorderedList className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.orderedList && (
                        <Toggle
                            pressed={editor.isActive("orderedList")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Ordered List"
                            onPressedChange={() =>
                                editor.chain().focus().toggleOrderedList().run()
                            }>
                            <AiOutlineOrderedList className="h-4 w-4" />
                        </Toggle>
                    )}
                </ButtonGroup>
            )}
            {toolbarConfig.link && (
                <ButtonGroup>
                    <SetLinkButton
                        disabled={disabled}
                        editor={editor}
                    />

                    <Button
                        variant="outline"
                        disabled={!editor.isActive("link") || disabled}
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
                        <Toggle
                            pressed={editor.isActive("bold")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Bold"
                            onPressedChange={() =>
                                editor.chain().focus().toggleBold().run()
                            }>
                            <TbBold className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.underline && (
                        <Toggle
                            pressed={editor.isActive("underline")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Underline"
                            onPressedChange={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }>
                            <AiOutlineUnderline className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.italic && (
                        <Toggle
                            pressed={editor.isActive("italic")}
                            variant="outline"
                            disabled={disabled}
                            size="sm"
                            aria-label="Toggle Italic"
                            onPressedChange={() =>
                                editor.chain().focus().toggleItalic().run()
                            }>
                            <TbItalic className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.strike && (
                        <Toggle
                            pressed={editor.isActive("strike")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Strikethrough"
                            onPressedChange={() =>
                                editor.chain().focus().toggleStrike().run()
                            }>
                            <MdOutlineStrikethroughS className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.subscript && (
                        <Toggle
                            pressed={editor.isActive("subscript")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Subscript"
                            onPressedChange={() =>
                                editor.chain().focus().toggleSubscript().run()
                            }>
                            <TbSubscript className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.superscript && (
                        <Toggle
                            pressed={editor.isActive("superscript")}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Superscript"
                            onPressedChange={() =>
                                editor.chain().focus().toggleSuperscript().run()
                            }>
                            <TbSuperscript className="h-4 w-4" />
                        </Toggle>
                    )}
                </ButtonGroup>
            )}

            {(toolbarConfig.textJustifyAlign ||
                toolbarConfig.textRightAlign ||
                toolbarConfig.textCenterAlign ||
                toolbarConfig.textLeftAlign) && (
                <ButtonGroup>
                    {toolbarConfig.textLeftAlign && (
                        <Toggle
                            pressed={editor.isActive({ textAlign: "left" })}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Text Align Left"
                            onPressedChange={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("left")
                                    .run()
                            }>
                            <TbAlignLeft className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.textCenterAlign && (
                        <Toggle
                            pressed={editor.isActive({ textAlign: "center" })}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Text Align Center"
                            onPressedChange={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("center")
                                    .run()
                            }>
                            <TbAlignCenter className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.textRightAlign && (
                        <Toggle
                            pressed={editor.isActive({ textAlign: "right" })}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Text Align Right"
                            onPressedChange={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("right")
                                    .run()
                            }>
                            <TbAlignRight className="h-4 w-4" />
                        </Toggle>
                    )}

                    {toolbarConfig.textJustifyAlign && (
                        <Toggle
                            pressed={editor.isActive({ textAlign: "justify" })}
                            variant="outline"
                            size="sm"
                            disabled={disabled}
                            aria-label="Toggle Text Align Justify"
                            onPressedChange={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign("justify")
                                    .run()
                            }>
                            <TbAlignJustified className="h-4 w-4" />
                        </Toggle>
                    )}
                </ButtonGroup>
            )}
        </>
    );
};

export default ToolbarMenu;
