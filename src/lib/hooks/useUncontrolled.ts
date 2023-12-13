import { useState } from "react";

interface UseUncontrolledInput<T> {
	/** Value for controlled state */
	value?: T;

	/** Initial value for uncontrolled state */
	defaultValue?: T;

	/** Final value for uncontrolled state when value and defaultValue are not provided */
	finalValue?: T;

	/** Controlled state onChange handler */
	onChange?(value: T): void;
}

/**
 * Custom hook to manage uncontrolled and controlled state
 * @param {T} value - Value for controlled state
 * @param  defaultValue - Initial value for uncontrolled state
 * @param  finalValue - Final value for uncontrolled state when value and defaultValue are not provided
 * @param  onChange - Controlled state onChange handler
 * @returns {[T, (value: T) => void, boolean]} - [value, onChange, isControlled]
 */
export function useUncontrolled<T>({
	value,
	defaultValue,
	finalValue,
	onChange = () => Object,
}: UseUncontrolledInput<T>): [T, (value: T) => void, boolean] {
	const [uncontrolledValue, setUncontrolledValue] = useState(
		defaultValue !== undefined ? defaultValue : finalValue,
	);

	const handleUncontrolledChange = (val: T) => {
		setUncontrolledValue(val);
		onChange?.(val);
	};

	if (value !== undefined) {
		return [value as T, onChange, true];
	}

	return [uncontrolledValue as T, handleUncontrolledChange, false];
}
