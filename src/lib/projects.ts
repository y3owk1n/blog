type Project = {
    image: string;
    name: string;
    description: string;
    link: string;
    githubLink?: string;
};
export const projects: Project[] = [
    {
        image: "/assets/projects/chadtype.jpg",
        name: "ChadType",
        description:
            "An open source minimalist typing game built on latest Next.JS features.",
        link: "https://chadtype.k92.gg",
        githubLink: "https://github.com/y3owk1n/chadtype",
    },
    {
        image: "/assets/projects/qr.jpg",
        name: "QR Generator",
        description:
            "An open source QR Code generator with Next.JS severless function.",
        link: "https://qr.k92.gg",
        githubLink: "https://github.com/y3owk1n/qr-gen",
    },
    {
        image: "/assets/projects/mda.jpg",
        name: "Mustang Dance Academy",
        description:
            "Dance Academy in Malaysia that consist of marketing, admin, student, instructor, and merchant portals.",
        link: "https://www.mustangdanceacademy.com/",
    },
    {
        image: "/assets/projects/skba.jpg",
        name: "SK Badminton Academy",
        description:
            "Badminton Academy in Malaysia that consist of marketing (WIP), admin, student, and instructor portals.",
        link: "https://www.skbadmintonclub.com/",
    },
    {
        image: "/assets/projects/herlia.jpg",
        name: "Herlia® Naturals",
        description:
            "Ecommerce site for Herlia Naturals that built on top of swell.js and Next.JS",
        link: "https://www.herlianaturals.com/",
    },
    {
        image: "/assets/projects/wakesport.jpg",
        name: "Wakesport Malaysia",
        description:
            "A marketing site for Wakesport Malaysia, a wake surfing pioneer in Malaysia.",
        link: "https://www.wakesportmalaysia.com/",
    },
];
