import styles from "./AIDevelopmentSection.module.scss";

type WorkflowStep = {
	step: number;
	title: string;
	description: string;
	details?: string[];
};

const workflowSteps: WorkflowStep[] = [
	{
		step: 1,
		title: "要件の具体化",
		description: "依頼内容を整理し、スコープ・優先度・制約を明確にする。",
		details: ["成果物: 要件の整理と確認事項のリスト"],
	},
	{
		step: 2,
		title: "詳細設計",
		description:
			"要件に基づき、データ構造・API・コンポーネント構成・ルーティングなどを設計する。",
		details: [
			"データ構造の定義",
			"API 設計",
			"コンポーネント構成図（Atomic デザインの階層を明記）",
			"ルーティング設計",
		],
	},
	{
		step: 3,
		title: "デザイン",
		description: "詳細設計に基づき、視覚的なデザインを生成する。",
		details: [
			"構造化デザイン仕様（Markdown表形式）",
			"簡易HTML/CSSコード（プレビュー用）",
			"Atomic デザイン階層の明記",
		],
	},
	{
		step: 4,
		title: "開発",
		description: "承認されたデザインと詳細設計に従って実装する。",
		details: [
			"Atomic デザインの階層構造を厳守",
			"各コンポーネントを正しいディレクトリに配置",
		],
	},
	{
		step: 5,
		title: "レビュー・セキュリティチェック",
		description: "実装の品質確認に加え、セキュリティチェックを行う。",
		details: [
			"コードレビュー",
			"セキュリティチェック",
		],
	},
	{
		step: 6,
		title: "PR 作成",
		description: "変更をブランチにまとめ、PR を作成する。",
		details: ["Pull Request の作成"],
	},
];

const AIDevelopmentSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section_inner}>
				<h2>AI開発について</h2>
				<p className={styles.overview}>
					このサイトはAI開発ツール（Cursor）を活用して開発しています。AI開発により、要件の整理から設計、デザイン、実装、レビュー、PR作成まで、一貫したワークフローで高品質な開発を実現しています。
				</p>
				{workflowSteps.map((step) => (
					<div key={step.step} className={styles.workflow_step}>
						<div className={styles.step_number}>{step.step}</div>
						<div className={styles.step_content}>
							<h3>{step.title}</h3>
							<p>{step.description}</p>
							{step.details && step.details.length > 0 && (
								<ul className={styles.step_details}>
									{step.details.map((detail) => (
										<li key={detail}>{detail}</li>
									))}
								</ul>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AIDevelopmentSection;
