export function groupBy<T>(
    array: T[],
    key: (item: T) => string
): { title: string; items: T[] }[] {
    return Object.entries(
        array.reduce((result, item) => {
            const group = key(item);
            result[group] = result[group] || [];
            result[group]?.push(item);
            return result;
        }, {} as Record<string, T[]>)
    ).map(([title, items]) => ({ title, items }));
}
