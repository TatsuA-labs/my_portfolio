import Link from "next/link";
import {
	HiBriefcase,
	HiCode,
	HiHome,
	HiInformationCircle,
} from "react-icons/hi";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav} aria-label="メインナビゲーション">
				<Link href="/" className={styles.nav_link} aria-label="ホームページへ移動">
					<HiHome className={styles.nav_icon} aria-hidden />
					<span>ホーム</span>
				</Link>
				<Link href="/career" className={styles.nav_link} aria-label="キャリアページへ移動">
					<HiBriefcase className={styles.nav_icon} aria-hidden />
					<span>キャリア</span>
				</Link>
				<Link href="/play_ground" className={styles.nav_link} aria-label="遊び場ページへ移動">
					<HiCode className={styles.nav_icon} aria-hidden />
					<span>遊び場</span>
				</Link>
				<Link href="/about_site" className={styles.nav_link} aria-label="サイトについてページへ移動">
					<HiInformationCircle className={styles.nav_icon} aria-hidden />
					<span>サイトについて</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
