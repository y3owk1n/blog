import { type Editor } from "@tiptap/react";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { TbBold, TbItalic } from "react-icons/tb";

import { Button } from "@/components/ui/Button";

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

export default SubMenu;
