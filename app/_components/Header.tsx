import Link from "next/link";
import styles from "@/app/_components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/career" className={styles.link}>
          Career
        </Link>
        <Link href="/play_ground" className={styles.link}>
          Play Ground
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
