/**
 * Function to group an array of items by a given key
 * @param  array - The array of items to group
 * @param  key - The key to group the items by
 * @returns  - An array of objects containing the grouped items
 */
export function groupBy<T>(
	array: T[],
	key: (item: T) => string,
): { title: string; items: T[] }[] {
	return Object.entries(
		array.reduce<Record<string, T[]>>((result, item) => {
			const group = key(item);
			result[group] = result[group] ?? [];
			result[group]?.push(item);
			return result;
		}, {}),
	).map(([title, items]) => ({ title, items }));
}
