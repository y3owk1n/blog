/**
 * Function to join multiple class names into a single string
 * @param {string[]} classes - An array of class names
 * @returns {string} - A single string of class names
 */
export const classNames = (...classes: string[]): string => {
	return classes.filter(Boolean).join(" ");
};
