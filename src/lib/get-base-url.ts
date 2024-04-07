export function getBaseUrl(baseUrl: string, slug?: string): string {
	const url = new URL(baseUrl);

	if (slug) {
		if (!slug.startsWith("/")) {
			url.pathname = `${url.pathname}${slug}`;
		} else {
			url.pathname = `${url.pathname}${slug.replace("/", "")}`;
		}
	}

	return url.toString();
}
