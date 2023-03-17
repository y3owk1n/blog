"use client";

import "@/styles/tiptap.css";
import React, { useEffect } from "react";
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
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { lowlight } from "lowlight";

import { Loader } from "@/components/ui/Loader";
import MainMenu from "@/components/ui/editor/MainMenu";
import SubMenu from "@/components/ui/editor/SubMenu";

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
