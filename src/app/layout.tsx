export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
