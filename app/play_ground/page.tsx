import CategoryList from "@/app/play_ground/_components/_organisms/CategoryList/CategoryList";
import PlaygroundSection from "@/app/play_ground/_components/_organisms/PlaygroundSection/PlaygroundSection";
import PageTitle from "@/components/molecules/PageTitle/PageTitle";
import Login from "@/app/play_ground/_domain/Auth/Login";
import CountUp from "@/app/play_ground/_domain/CountUp/CountUp";
import DamageEffect from "@/app/play_ground/_domain/DamageEffect/DamageEffect";
import GlobalDialog from "@/app/play_ground/_domain/Dialog/GlobalDialog";
import Spinner from "@/app/play_ground/_domain/OriginalSpinner/OriginalSpinner";
import StripeDemo from "@/app/play_ground/_domain/Stripe/StripeDemo";
import TransformAnimation from "@/app/play_ground/_domain/TransformAnimation/TransformAnimation";
import WebCamera from "@/app/play_ground/_domain/WebCamera/WebCamera";
import styles from "@/app/play_ground/page.module.scss";

type Feature = {
	id: number;
	title: string;
	description: string;
	category: string;
	component: React.ComponentType;
	created?: string;
};

type Category = {
	id: string;
	name: string;
};

const Page = () => {
	const categories: Category[] = [
		{ id: "animation", name: "アニメーション" },
		{ id: "ui", name: "UIコンポーネント" },
		{ id: "auth", name: "認証" },
		{ id: "payment", name: "決済" },
		{ id: "media", name: "メディア" },
	];

	const features: Feature[] = [
		{
			id: 1,
			title: "要素をアニメーションで動かす",
			description: "CSS Transformを使用したアニメーション効果のデモです。要素を回転・拡大・移動させることができます。",
			category: "animation",
			component: TransformAnimation,
			created: "2025-02-26",
		},
		{
			id: 2,
			title: "数値の上昇の表現",
			description: "数値が0から指定した値までアニメーションで上昇するデモです。値に応じてフォントサイズも変化します。",
			category: "animation",
			component: CountUp,
			created: "2025-02-26",
		},
		{
			id: 3,
			title: "星空エフェクト（ランダム）",
			description: "ランダムな位置にエフェクトを表示するデモです。エフェクトの数や表示間隔を調整できます。",
			category: "animation",
			component: DamageEffect,
			created: "2025-02-27",
		},
		{
			id: 4,
			title: "オリジナルスピナー",
			description: "カスタムデザインのローディングスピナーのデモです。",
			category: "ui",
			component: Spinner,
			created: "2025-03-31",
		},
		{
			id: 5,
			title: "グローバル管理のダイアログ",
			description: "グローバルに管理されるダイアログコンポーネントのデモです。",
			category: "ui",
			component: GlobalDialog,
			created: "2025-03-31",
		},
		{
			id: 6,
			title: "NextAuthを使ったGithubログイン",
			description: "NextAuthを使用したGitHub認証のデモです。",
			category: "auth",
			component: Login,
			created: "2025-04-02",
		},
		{
			id: 7,
			title: "Stripe決済デモ",
			description: "Stripeを使用した決済機能のデモです。",
			category: "payment",
			component: StripeDemo,
			created: "2025-04-04",
		},
		{
			id: 8,
			title: "Webカメラへの接続",
			description: "Webカメラに接続して映像を表示するデモです。",
			category: "media",
			component: WebCamera,
			created: "2025-03-27",
		},
	];

	return (
		<main className={styles.page}>
			<PageTitle
				title="遊び場"
				lead="このページは案件や自己研鑽を通して面白いと思ったものを実際に実装して残していくことを目的としています。"
			/>
			<CategoryList categories={categories} />
			<PlaygroundSection categories={categories} features={features} />
		</main>
	);
};

export default Page;
