import fs from "fs";
import nodeFs from "node:fs/promises";
import { join } from "path";
import extractMdxMeta from "extract-mdx-metadata";
import { compile } from "@mdx-js/mdx";

export type PostType = {
    slug: string;
    category: string;
    title: string;
    date: string;
    coverImage: string;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
};

export type Fields = "slug" | "title" | "date" | "content" | "category";
export type MdType = "_posts" | "_docs";

export function getMdSlugs(type: MdType) {
    const directory = join(process.cwd(), "src", type);
    return fs.readdirSync(directory);
}

export async function getMdDetailBySlug(
    slug: string,
    fields: Fields[] = [],
    type: MdType
) {
    const directory = join(process.cwd(), "src", type);
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(directory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    await compile(await nodeFs.readFile(fullPath));

    const meta = await extractMdxMeta<Partial<PostType>>(`${fileContents}`);

    const items: Partial<PostType> = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }

        if (typeof meta[field] !== "undefined") {
            items[field] = meta[field];
        }
    });

    return items;
}

export async function getAllMds(fields: Fields[] = [], type: MdType) {
    const slugs = getMdSlugs(type);
    const posts = await Promise.all(
        slugs.map(async (slug) => await getMdDetailBySlug(slug, fields, type))
    );
    return posts;
}
