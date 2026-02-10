import Link from "next/link";
import styles from "./Cta.module.scss";

const Cta = () => {
	return (
		<section className={styles.cta_section} aria-labelledby="cta-title">
			<h2 id="cta-title" className={styles.cta_title}>
				お問い合わせ
			</h2>
			<p className={styles.cta_text}>
				プロジェクトのご相談やお問い合わせはこちらからお気軽にどうぞ。
			</p>
			<Link href="/contact" className={styles.cta_btn}>
				お問い合わせはこちら
			</Link>
		</section>
	);
};

export default Cta;
