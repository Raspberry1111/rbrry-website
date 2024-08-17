import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useCheckboxLocalStorage(id: number): [boolean, Dispatch<SetStateAction<boolean>>] {
	const [value, setValue] = useState(false);
	const [isFirst, setIsFirst] = useState(true);

	const key = `checkbox-${id}`;

	useEffect(() => {
		const stored = localStorage.getItem(key);
		setValue(stored ? JSON.parse(stored) : false);
	}, [key]);

	useEffect(() => {
		setIsFirst(false);
		if (isFirst) {
			return;
		}

		if (!value) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, "true");
		}
	}, [key, value]);

	return [value, setValue] as const;
}

export default function Checkbox({ checked, onClick }: { checked: boolean, onClick: (on: boolean) => void }) {
	// const [isChecked, setIsChecked] = useCheckboxLocalStorage(id);
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		onClick(isChecked);
	}, [isChecked, onClick]);

	return <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
}