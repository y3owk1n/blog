"use client";

import { ThemeProvider } from "next-themes";

function RootProviders({
	children,
}: { children: React.ReactNode }): JSX.Element {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
			{children}
		</ThemeProvider>
	);
}

export default RootProviders;
