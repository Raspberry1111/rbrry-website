import { useEffect, useState } from "react";

export default function Checkbox({ checked, onClick }: { checked: boolean, onClick: (on: boolean) => void }) {
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		onClick(isChecked);
	}, [isChecked, onClick]);

	return <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />;
}