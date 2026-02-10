import styles from "./TechStackSection.module.scss";

type TechItem = {
	name: string;
	description?: string;
	reasons?: string[];
};

type TechCategory = {
	title: string;
	items: TechItem[];
};

const techStack: TechCategory[] = [
	{
		title: "フロントエンド",
		items: [
			{
				name: "Next.js 15",
				description: "フレームワーク",
				reasons: [
					"SSRやSSGが可能であるため、SEOに有利である。",
					"Reactに比べて、初期実装までが楽である。",
				],
			},
			{
				name: "CSS Modules + SCSS",
				description: "スタイリング",
				reasons: [
					"CSS Modulesは、CSSのスコープを持つことができるため、コンポーネントごとにCSSを管理することができる。",
					"build時間が短い。",
				],
			},
			{
				name: "Atomic Design",
				description: "設計手法",
				reasons: [
					"Atomicデザインをより簡略化したもの。より直感的にわかりやすく、管理がしやすいため採用。",
				],
			},
			{
				name: "TypeScript",
				description: "言語",
			},
		],
	},
	{
		title: "バックエンド",
		items: [
			{
				name: "Next.js 15",
				description: "フレームワーク",
			},
			{
				name: "TypeScript",
				description: "言語",
			},
			{
				name: "Go（予定）",
				description: "言語",
				reasons: [
					"フルスタック TypeScriptにすることで、単一の言語で実装ができる。処理速度が気になる場合は、Goを一部使っていきたい。（予定）",
				],
			},
		],
	},
	{
		title: "DB",
		items: [
			{
				name: "Google Spreadsheet",
				reasons: [
					"公開しているデータであれば、Google Spreadsheetを使うことでDB代を削減できる。",
				],
			},
		],
	},
	{
		title: "インフラ",
		items: [
			{
				name: "Vercel",
				reasons: ["Next.jsデプロイが簡単で、無料で使える。"],
			},
		],
	},
	{
		title: "その他",
		items: [
			{
				name: "Biome",
				description: "Lint/Format",
			},
			{
				name: "Zustand",
				description: "状態管理",
			},
			{
				name: "Radix UI / Headless UI",
				description: "UIコンポーネント",
			},
			{
				name: "React Icons（Heroicons）",
				description: "アイコン",
			},
			{
				name: "safe-chain",
				description: "セキュリティ",
			},
		],
	},
];

const TechStackSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section_inner}>
				<h2>本サイトを構成する技術</h2>
				{techStack.map((category) => (
					<div key={category.title} className={styles.tech_category}>
						<h3>{category.title}</h3>
						{category.items.map((item, index) => (
							<div key={`${item.name}-${index}`} className={styles.tech_item}>
								<div className={styles.tech_name}>{item.name}</div>
								{item.description && (
									<div className={styles.tech_description}>
										{item.description}
									</div>
								)}
								{item.reasons && item.reasons.length > 0 && (
									<ul className={styles.tech_reasons}>
										{item.reasons.map((reason) => (
											<li key={reason}>{reason}</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default TechStackSection;
