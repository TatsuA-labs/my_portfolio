import CountUp from "@/app/play_ground/_components/CountUp";
import DamageEffect from "@/app/play_ground/_components/DamageEffect";
import WebCamera from "@/app/play_ground/_components/WebCamera";
import TransformAnimation from "@/app/play_ground/_components/TransformAnimation";
import styles from "@/app/play_ground/page.module.scss";

const Page = () => {
	return (
		<div className={styles.page}>
			<div className={styles.page_container}>
				<div className={styles.title_wrapper}>
					<h1>遊び場へようこそ！！！</h1>
					<h2>このページの目的</h2>
					<p>
						このページは案件や自己研鑽を通して面白いと思ったものを実際に実装して残していくことを目的としています。
						そのため見やすさ等は二の次なので閲覧する際はご了承いただけると幸いです。
					</p>
				</div>
				<TransformAnimation />
				<CountUp />
				<DamageEffect />
				<WebCamera />
			</div>
		</div>
	);
};

export default Page;
