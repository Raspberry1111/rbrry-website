import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {

	return (
		<main>
			<ul className={styles.links}>
				<div className={styles.linkContainer}><Link className={styles.link} href="/checkboxes">checkboxes</Link></div>
				<div className={styles.linkContainer}><Link className={styles.link} href="/garlicbread">garlicbread</Link></div>
			</ul>
		</main>
	);
}
