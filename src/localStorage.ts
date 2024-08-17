import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T, saveInitialValue = false) {
	const [value, setValue] = useState(fallbackValue);
	const [isFirst, setIsFirst] = useState(true);

	useEffect(() => {
		const stored = localStorage.getItem(key);
		setValue(stored ? JSON.parse(stored) : fallbackValue);
	}, [fallbackValue, key]);

	useEffect(() => {
		setIsFirst(false);
		if (isFirst && !saveInitialValue) {
			return;
		}

		localStorage.setItem(key, JSON.stringify(value));

	}, [key, value]);

	return [value, setValue] as const;
}