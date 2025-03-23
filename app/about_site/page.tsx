import styles from "@/app/about_site/Page.module.scss";
import ContentsWrapper from "@/components/common/contents/ContentsWrapper";

const Page = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page_container}>
				<h1>このサイトについて</h1>
				<ContentsWrapper created="2025-03-23" title="" isFlex={false}>
					<div className={styles.title_wrapper}>
						<h3>ポートフォリオサイトとしての役割</h3>
						<p>
							自分に興味を持っていただいた皆様に対して、アピールする場としての役割と、自分自身の過去を見直す役割を期待して作成しています。
						</p>
						<h3>技術的な興味を満たす場としての役割</h3>
						<p>
							ポートフォリの改修や、遊び場の追加を通して、自身の技術的なインプットとアウトプットとしても役割を期待しています。
						</p>
					</div>
				</ContentsWrapper>
				<ContentsWrapper
					created="2025-03-23"
					title="本サイトを構成する技術"
					isFlex={true}
				>
					<div className={styles.content}>
						<h3>フロントエンド</h3>
						<p>フレームワーク: Next.js</p>
						<p>言語: Typescript</p>
					</div>
					<div className={styles.content}>
						<h3>バックエンド</h3>
						<p>フレームワーク: Next.js</p>
						<p>言語: Typescript</p>
						<p>予定: Goの追加</p>
					</div>
					<div className={styles.content}>
						<h3>DB</h3>
						<p>Google Spredsheet</p>
					</div>
					<div className={styles.content}>
						<h3>インフラ</h3>
						<p>Vercel</p>
					</div>
				</ContentsWrapper>
			</div>
		</div>
	);
};

export default Page;
