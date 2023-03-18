import type { ReactNode } from "react";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import type { Level, RichTextEditorToolbar } from "./RichTextEditor";
import SetLinkButton from "./SetLinkButton";

const TooltipWrapper = ({
    children,
    tooltipContent,
}: {
    children: ReactNode;
    tooltipContent: string;
}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{tooltipContent}</p>
            </TooltipContent>
        </Tooltip>
    );
};

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
                        <TooltipWrapper tooltipContent="Undo">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    editor.chain().focus().undo().run()
                                }>
                                <AiOutlineUndo
                                    aria-label="Undo"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.undo && (
                        <TooltipWrapper tooltipContent="Redo">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    editor.chain().focus().redo().run()
                                }>
                                <AiOutlineRedo
                                    aria-label="Redo"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}
                </ButtonGroup>
            )}

            <ButtonGroup>
                {headingsArray.map((level) => (
                    <TooltipWrapper
                        key={level}
                        tooltipContent={`Heading ${level}`}>
                        <Button
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
                    </TooltipWrapper>
                ))}
            </ButtonGroup>

            {(toolbarConfig.codeBlock ||
                toolbarConfig.horizontalRule ||
                toolbarConfig.blockquote) && (
                <ButtonGroup>
                    {toolbarConfig.codeBlock && (
                        <TooltipWrapper tooltipContent="Code Block">
                            <Button
                                variant={
                                    editor.isActive("codeBlock")
                                        ? "subtle"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleCodeBlock()
                                        .run()
                                }>
                                <TbCode
                                    aria-label="Code Block"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.horizontalRule && (
                        <TooltipWrapper tooltipContent="Horizontal Line">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .setHorizontalRule()
                                        .run()
                                }>
                                <MdHorizontalRule
                                    aria-label="Horizontal Rule"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.blockquote && (
                        <TooltipWrapper tooltipContent="Blockquote">
                            <Button
                                variant={
                                    editor.isActive("blockquote")
                                        ? "subtle"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleBlockquote()
                                        .run()
                                }>
                                <TbBlockquote
                                    aria-label="Blockquote"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}
                </ButtonGroup>
            )}

            {(toolbarConfig.bulletList || toolbarConfig.orderedList) && (
                <ButtonGroup>
                    {toolbarConfig.bulletList && (
                        <TooltipWrapper tooltipContent="Bullet List">
                            <Button
                                variant={
                                    editor.isActive("bulletList")
                                        ? "subtle"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleBulletList()
                                        .run()
                                }>
                                <AiOutlineUnorderedList
                                    aria-label="Bullet List"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.orderedList && (
                        <TooltipWrapper tooltipContent="Ordered List">
                            <Button
                                variant={
                                    editor.isActive("orderedList")
                                        ? "subtle"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleOrderedList()
                                        .run()
                                }>
                                <AiOutlineOrderedList
                                    aria-label="Ordered List"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}
                </ButtonGroup>
            )}
            {toolbarConfig.link && (
                <ButtonGroup>
                    <TooltipWrapper tooltipContent="Set Link">
                        <SetLinkButton editor={editor} />
                    </TooltipWrapper>

                    <TooltipWrapper tooltipContent="Remove Link">
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
                    </TooltipWrapper>
                </ButtonGroup>
            )}

            {(toolbarConfig.bold ||
                toolbarConfig.underline ||
                toolbarConfig.italic ||
                toolbarConfig.strike) && (
                <ButtonGroup>
                    {toolbarConfig.bold && (
                        <TooltipWrapper tooltipContent="Bold">
                            <Button
                                variant={
                                    editor.isActive("bold")
                                        ? "subtle"
                                        : "outline"
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
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.underline && (
                        <TooltipWrapper tooltipContent="Underline">
                            <Button
                                variant={
                                    editor.isActive("underline")
                                        ? "subtle"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                    editor
                                        .chain()
                                        .focus()
                                        .toggleUnderline()
                                        .run()
                                }>
                                <AiOutlineUnderline
                                    aria-label="Underline"
                                    className="h-4 w-4"
                                />
                            </Button>
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.italic && (
                        <TooltipWrapper tooltipContent="Italic">
                            <Button
                                variant={
                                    editor.isActive("italic")
                                        ? "subtle"
                                        : "outline"
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
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.strike && (
                        <TooltipWrapper tooltipContent="Strikethrough">
                            <Button
                                variant={
                                    editor.isActive("strike")
                                        ? "subtle"
                                        : "outline"
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
                        </TooltipWrapper>
                    )}
                </ButtonGroup>
            )}

            {(toolbarConfig.textJustifyAlign ||
                toolbarConfig.textRightAlign ||
                toolbarConfig.textCenterAlign ||
                toolbarConfig.textLeftAlign) && (
                <ButtonGroup>
                    {toolbarConfig.textLeftAlign && (
                        <TooltipWrapper tooltipContent="Align Left">
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
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.textCenterAlign && (
                        <TooltipWrapper tooltipContent="Align Center">
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
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.textRightAlign && (
                        <TooltipWrapper tooltipContent="Align Right">
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
                        </TooltipWrapper>
                    )}

                    {toolbarConfig.textJustifyAlign && (
                        <TooltipWrapper tooltipContent="Align Justify">
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
                        </TooltipWrapper>
                    )}
                </ButtonGroup>
            )}
        </>
    );
};

export default ToolbarMenu;
