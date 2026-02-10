import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_inner}>
				<nav className={styles.footer_nav} aria-label="フッターナビゲーション">
					<Link href="/">ホーム</Link>
					<Link href="/career">キャリア</Link>
					<Link href="/play_ground">遊び場</Link>
					<Link href="/about_site">サイトについて</Link>
				</nav>
				<p className={styles.footer_copyright}>© 2025 Portfolio</p>
			</div>
		</footer>
	);
};

export default Footer;
