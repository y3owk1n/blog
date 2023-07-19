import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
    storage: {
        kind: "local",
    },
    singletons: {
        about: singleton({
            label: "About",
            path: "src/contents/about",
            schema: {
                description: fields.document({
                    label: "Document",
                    formatting: true,
                    links: true,
                }),
            },
        }),
    },
    collections: {
        experiences: collection({
            label: "Experiences",
            slugField: "title",
            path: "src/contents/experiences/*",
            schema: {
                title: fields.slug({
                    name: {
                        label: "Position - Company",
                    },
                    // Optional slug label overrides
                    slug: {
                        label: "SEO-friendly slug",
                        description:
                            "This will define the file/folder name for this entry",
                    },
                }),
                startDate: fields.date({ label: "Start Date" }),
                endDate: fields.conditional(
                    fields.checkbox({
                        label: "Present",
                        defaultValue: false,
                    }),
                    {
                        true: fields.empty(),
                        false: fields.date({
                            label: "End Date",
                        }),
                    }
                ),
                link: fields.url({ label: "Company Link" }),
                description: fields.text({
                    label: "Description",
                    multiline: true,
                }),
                tags: fields.array(
                    fields.text({ label: "Tag" }),
                    // Labelling options
                    {
                        label: "Tag",
                        itemLabel: (props) => props.value,
                    }
                ),
            },
        }),
        projects: collection({
            label: "Projects",
            slugField: "name",
            path: "src/contents/projects/*",
            schema: {
                name: fields.slug({
                    name: {
                        label: "Project Name",
                    },
                    // Optional slug label overrides
                    slug: {
                        label: "SEO-friendly slug",
                        description:
                            "This will define the file/folder name for this entry",
                    },
                }),
                link: fields.url({ label: "Project Link" }),
                image: fields.image({
                    label: "Cover Image",

                    directory: "public/keystatic/projects",
                    publicPath: "/keystatic/projects/",
                }),
                githubLink: fields.conditional(
                    fields.checkbox({
                        label: "Have Github Link",
                        defaultValue: false,
                    }),
                    {
                        false: fields.empty(),
                        true: fields.url({
                            label: "Github Link",
                        }),
                    }
                ),
                description: fields.text({
                    label: "Description",
                    multiline: true,
                }),
            },
        }),
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/contents/posts/*",
            schema: {
                title: fields.slug({
                    name: {
                        label: "Blog Title",
                    },
                    // Optional slug label overrides
                    slug: {
                        label: "SEO-friendly slug",
                        description:
                            "This will define the file/folder name for this entry",
                    },
                }),
                coverImage: fields.image({
                    label: "Cover Image",
                    directory: "public/keystatic/posts",
                    publicPath: "/keystatic/posts/",
                }),
                description: fields.text({
                    label: "Description",
                    multiline: true,
                }),
                date: fields.date({
                    label: "Publish Date",
                }),
                content: fields.document({
                    label: "Document",
                    formatting: true,
                    links: true,
                    images: {
                        directory: "public/keystatic/posts/_images",
                        publicPath: "/keystatic/posts/_images/",
                        schema: {
                            title: fields.text({
                                label: "Caption",
                                description:
                                    "The text to display under the image in a caption.",
                            }),
                        },
                    },
                }),
            },
        }),
    },
});
