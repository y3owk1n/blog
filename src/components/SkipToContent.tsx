import React from "react";
import Link from "next/link";

const SkipToContent = () => {
    return (
        <Link
            href="/#content"
            className="absolute left-0 top-0 block -translate-x-full rounded bg-foreground px-4 py-3 text-sm font-bold uppercase text-background  focus-visible:translate-x-0">
            Skip to Content
        </Link>
    );
};

export default SkipToContent;
