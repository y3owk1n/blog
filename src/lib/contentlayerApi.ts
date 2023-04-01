import { allPosts, allUis } from "@/contentlayer/generated";

import { groupBy } from "./groupBy";

interface AllPosts {
    slug: string;
    title: string;
    date: string;
    description: string;
    href: string;
    rawSlug: string;
    cover: string;
}

interface NestedGroup {
    title: string;
    items: NestedItem[];
}

interface NestedItem {
    title: string;
    href: string;
    items: NestedItem[];
}

export const groupUisByTags: Array<NestedGroup> = groupBy(
    allUis,
    (ui) => ui.tag
).map((ui) => ({
    title: ui.title,
    items: ui.items.map((item) => ({
        title: item.title,
        href: item.slug,
        items: [],
    })),
}));

export const allPostsAndSort: Array<AllPosts> = allPosts
    .map((content) => ({
        slug: content.slug,
        title: content.title,
        date: content.date,
        description: content.description,
        href: `/posts/${content.slugAsParams}`,
        rawSlug: content.slugAsParams,
        cover: content.coverImage,
    }))
    .sort((a, b) => (a.date && b.date && a.date > b.date ? -1 : 1));

export const allPostsWithTitle: Array<NestedGroup> = [
    {
        title: "Posts",
        items: allPostsAndSort.map((item) => ({
            title: item.title,
            href: item.href,
            items: [],
        })),
    },
];

/**
 * Function to get all posts and sort them by date
 * @returns {Array} - An array of posts sorted by date
 */
export const getAllPostsAndSort = (): Array<AllPosts> => {
    const posts = allPosts.map((content) => ({
        slug: content.slug,
        title: content.title,
        date: content.date,
        description: content.description,
        href: `/posts/${content.slugAsParams}`,
        rawSlug: content.slugAsParams,
        cover: content.coverImage,
    }));

    const sorted = posts.sort((a, b) =>
        a.date && b.date && a.date > b.date ? -1 : 1
    );

    return sorted;
};

export const firstThreePosts: Array<AllPosts> = getAllPostsAndSort().slice(
    0,
    3
);
