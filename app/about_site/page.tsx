import styles from "@/app/about_site/Page.module.scss";
import ContentCard from "@/components/base/Card/ContentCard";

const Page = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page_container}>
				<h1>このサイトについて</h1>
				<ContentCard created="2025-03-23" title="" isFlex={false}>
					<div className={styles.title_wrapper}>
						<h3>ポートフォリオサイトとしての役割</h3>
						<p>
							自分に興味を持っていただいた皆様に対して、アピールする場としての役割と、自分自身の過去を見直す役割を期待して作成しています。
						</p>
						<h3>技術的な興味を満たす場としての役割</h3>
						<p>
							ポートフォリの改修や、遊び場の追加を通して、自身の技術的なインプットとアウトプットとしても役割を期待しています。
							また、極力ライブラリを使わずに実装することを目指しています。
						</p>
					</div>
				</ContentCard>
				<ContentCard
					created="2025-03-23"
					title="本サイトを構成する技術"
					isFlex={true}
					height={400}
				>
					<div className={styles.content}>
						<h3>フロントエンド</h3>
						<p>フレームワーク: Next.js + Css Modules + Scss</p>
						<p>言語: Typescript</p>
						<p>理由:</p>
						<ul>
							<li>
								SSRやSSGが可能であるため、SEOに有利である。
								Reactに比べて、初期実装までが楽である。
							</li>
							<li>
								Css
								Modulesは、CSSのスコープを持つことができるため、コンポーネントごとにCSSを管理することができる。
								build時間が短い。
							</li>
						</ul>
					</div>
					<div className={styles.content}>
						<h3>バックエンド</h3>
						<p>フレームワーク: Next.js</p>
						<p>言語: Typescript</p>
						<p>予定: Goの追加</p>
						<p>理由:</p>
						<ul>
							<li>
								フルスタック TypeScriptにすることで、単一の言語で実装ができる。
								処理速度が気になる場合は、Goを一部使っていきたい。（予定）
							</li>
						</ul>
					</div>
					<div className={styles.content}>
						<h3>DB</h3>
						<p>Google Spredsheet</p>
						<p>理由:</p>
						<ul>
							<li>
								公開しているデータのため、Google
								Spredsheetを使うことでDB代を削減できる。z
							</li>
						</ul>
					</div>
					<div className={styles.content}>
						<h3>インフラ</h3>
						<p>Vercel</p>
						<p>理由:</p>
						<ul>
							<li>Next.jsデプロイが簡単で、無料で使える。</li>
						</ul>
					</div>
				</ContentCard>
			</div>
		</div>
	);
};

export default Page;
