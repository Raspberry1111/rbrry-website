import styles from "./page.module.css";
import Link from "next/link";

const link = (href: string, text: string) => <div className={styles.linkContainer}><Link className={styles.link} href={href}>{text}</Link></div>;

export default function Home() {
	return (
		<main>
			<ul className={styles.links}>
				{link("/checkboxes", "checkboxes")}
				{link("/garlicbread", "garlicbread")}
			</ul>
		</main>
	);
}
