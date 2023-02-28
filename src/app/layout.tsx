import { Toaster } from "@/components/Toaster";
import "@/styles/globals.css";

export const metadata = {
    title: "UI",
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Toaster />
            <body>{children}</body>
        </html>
    );
}
