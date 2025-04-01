import styles from "@/app/_domain/Header.module.scss";
import LinkButton from "@/components/base/Button1/LinkButton";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<LinkButton href="/" title="Home" />
				<LinkButton href="/career" title="Career" />
				<LinkButton href="/play_ground" title="Play Ground" />
				<LinkButton href="/about_site" title="About Site" />
				{/* <LinkButton href="/contact" title="Contact" /> */}
			</nav>
		</header>
	);
};

export default Header;
