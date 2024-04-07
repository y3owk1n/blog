export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en" suppressHydrationWarning>
			{children}
		</html>
	);
}
