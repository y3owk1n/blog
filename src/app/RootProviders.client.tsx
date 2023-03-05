"use client";

import { ThemeProvider } from "next-themes";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default RootProviders;
