import { groupBy } from "./groupBy";
import { allUis, allPosts } from "@/contentlayer/generated";

export const groupUisByTags = groupBy(allUis, (ui) => ui.tag).map((ui) => ({
    title: ui.title,
    items: ui.items.map((item) => ({
        title: item.title,
        href: item.slug,
        items: [],
    })),
}));

export const allPostsAndSort = allPosts
    .map((content) => ({
        slug: content.slug,
        title: content.title,
        date: content.date,
        description: content.description,
        href: `/posts/${content.slugAsParams}`,
        coverImage: content.coverImage,
    }))
    .sort((a, b) => (a.date && b.date && a.date > b.date ? -1 : 1));

export const allPostsWithTitle = [
    {
        title: "Posts",
        items: allPostsAndSort.map((item) => ({
            title: item.title,
            href: item.href,
            items: [],
        })),
    },
];

export const getAllPostsAndSort = () => {
    const posts = allPosts.map((content) => ({
        slug: content.slug,
        title: content.title,
        date: content.date,
        description: content.description,
        href: `/posts/${content.slugAsParams}`,
        coverImage: content.coverImage,
    }));

    const sorted = posts.sort((a, b) =>
        a.date && b.date && a.date > b.date ? -1 : 1
    );

    return sorted;
};

export const firstThreePosts = getAllPostsAndSort().slice(0, 3);
