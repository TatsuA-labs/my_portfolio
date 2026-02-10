import styles from "./AboutSiteSection.module.scss";

const AboutSiteSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section_inner}>
				<h2>サイトの目的</h2>
				<div className={styles.card}>
					<h3>ポートフォリオサイトとしての役割</h3>
					<p>
						自分に興味を持っていただいた皆様に対して、アピールする場としての役割と、自分自身の過去を見直す役割を期待して作成しています。
					</p>
				</div>
				<div className={styles.card}>
					<h3>技術的な興味を満たす場としての役割</h3>
					<p>
						ポートフォリオの改修や、遊び場の追加を通して、自身の技術的なインプットとアウトプットとしても役割を期待しています。
						また、極力ライブラリを使わずに実装することを目指しています。
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSiteSection;
