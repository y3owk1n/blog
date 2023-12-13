/**
 * Function to group an array of items by a given key
 * @template T
 * @param {T[]} array - The array of items to group
 * @param {(item: T) => string} key - The key to group the items by
 * @returns { { title: string; items: T[] }[] } - An array of objects containing the grouped items
 */
export function groupBy<T>(
	array: T[],
	key: (item: T) => string,
): { title: string; items: T[] }[] {
	return Object.entries(
		array.reduce(
			(result, item) => {
				const group = key(item);
				result[group] = result[group] || [];
				result[group]?.push(item);
				return result;
			},
			{} as Record<string, T[]>,
		),
	).map(([title, items]) => ({ title, items }));
}
