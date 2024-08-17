"use client";

import { ReactElement, useEffect, useState } from "react";
import styles from "./page.module.css";
import Checkbox from "./checkbox";

function loadCheckboxesState(): { [key: number]: boolean } {
	const checkboxes = localStorage.getItem("checkboxes");
	if (checkboxes) {
		return JSON.parse(checkboxes);
	} else {
		return {};
	}
}

export default function Checkboxes() {
	const [checkboxes, setCheckboxes] = useState<ReactElement[]>([]);

	useEffect(() => {
		const checkboxesState = loadCheckboxesState();
		const checkboxes = [];

		for (let i = 0; i < 10000; i++) {
			const onClickHandler = (on: boolean) => {
				if (on) {
					checkboxesState[i] = true;
				} else {
					delete checkboxesState[i];
				}
				localStorage.setItem("checkboxes", JSON.stringify(checkboxesState));
			}

			checkboxes.push(<div className={styles.checkbox} key={i}>
				<Checkbox checked={checkboxesState[i]} onClick={onClickHandler} />
			</div>);
		}

		setCheckboxes(checkboxes);
	}, []);

	return <div className={styles.checkboxContainer}>
		{checkboxes}
	</div>
}