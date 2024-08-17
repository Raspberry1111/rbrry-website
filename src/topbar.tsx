"use client";

import { useEffect, useState } from "react";
import styles from "./topbar.module.css";
import Link from "next/link";
import Scrambler from "./scrambler";
import { usePathname } from "next/navigation";

const HOMEPAGE_TITLE = "rbrry.fyi";
const OTHER_TITLE = "return home";


export default function Topbar() {
	const pathname = usePathname();

	const [title, setTitle] = useState(HOMEPAGE_TITLE);
	const [targetTitle, setTargetTitle] = useState(OTHER_TITLE);

	useEffect(() => {
		if (pathname === "/") {
			setTargetTitle(HOMEPAGE_TITLE);
		} else {
			setTargetTitle(OTHER_TITLE);
		}
	}, [pathname]);

	return (
		<div className={styles.topbar}>
			<h1 className={styles.topbuttonContainer}>
				<Link href="/" className={styles.topbutton}>
					<p className={styles.topbuttonArrow}>{"<"}</p>
					<Scrambler key={targetTitle} text={title} setText={setTitle} endingText={targetTitle} minIterations={20} />
					<p className={styles.topbuttonArrow}>{">"}</p>
				</Link>
			</h1>

			<div className={styles.quote}><i><q>Sometimes genius, always stupid</q></i></div>
		</div >
	)
}