import React from "react";
import Link from "next/link";

const SkipToContent = () => {
    return (
        <Link
            href="/#content"
            className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
            Skip to Content
        </Link>
    );
};

export default SkipToContent;
