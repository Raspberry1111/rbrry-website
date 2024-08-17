"use client";

import { ReactElement, useEffect, useState } from "react";
import styles from "./page.module.css";
import Checkbox from "./checkbox";
import { useLocalStorage } from "@/localStorage";


export default function Checkboxes() {
	const checkboxes: ReactElement[] = [];

	for (let i = 0; i < 10000; i++) {
		checkboxes.push(<div className={styles.checkbox} key={i}><Checkbox id={i} /></div>);
	}

	return <div className={styles.checkboxContainer}>
		{checkboxes}
	</div>
}