"use client";

import React from "react";
import { ListBulletIcon } from "@heroicons/react/20/solid";
import {
    BubbleMenu,
    Editor,
    EditorContent,
    FloatingMenu,
    useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { TbBold, TbCode, TbItalic } from "react-icons/tb";

import { Button } from "@/components/ui/Button";

const MainMenu = ({ editor }: { editor: Editor }) => {
    return (
        <>
            <Button
                variant={editor.isActive("code") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleCode().run()}>
                <TbCode
                    aria-label="Code"
                    className="h-4 w-4"
                />
            </Button>

            <Button
                variant={editor.isActive("bulletList") ? "subtle" : "outline"}
                size="sm"
                onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <ListBulletIcon
                    aria-label="Bullet List"
                    className="h-4 w-4"
                />
            </Button>

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
        extensions: [StarterKit],
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
    return (
        <div>
            {editor && (
                <BubbleMenu
                    className="space-x-2 rounded-md bg-slate-200 p-2 dark:bg-slate-800"
                    editor={editor}
                    tippyOptions={{ duration: 100 }}>
                    <SubMenu editor={editor} />
                </BubbleMenu>
            )}

            {editor && (
                <FloatingMenu
                    editor={editor}
                    tippyOptions={{ duration: 100 }}>
                    <SubMenu editor={editor} />
                </FloatingMenu>
            )}
            {editor && (
                <div className="space-x-2 rounded-md bg-slate-200 p-2 dark:bg-slate-800">
                    <MainMenu editor={editor} />
                </div>
            )}
            <div className="mt-2 rounded-md border border-slate-200 p-6 dark:border-slate-700">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default TiptapDemo;
