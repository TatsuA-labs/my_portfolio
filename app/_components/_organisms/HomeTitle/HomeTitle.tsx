import Image from "next/image";
import SnsLinks from "@/components/molecules/SnsLinks/SnsLinks";
import styles from "./HomeTitle.module.scss";

type HomeTitleProps = {
	githubUrl?: string;
	linkedinUrl?: string;
};

const HomeTitle = ({ githubUrl, linkedinUrl }: HomeTitleProps) => {
	return (
		<section className={styles.hero} aria-labelledby="home-title">
			<div className={styles.hero_photo_wrapper}>
				<Image
					src="/top_image.jpg"
					alt="プロフィール写真"
					width={240}
					height={240}
					className={styles.hero_photo}
					priority
				/>
			</div>
			<h1 id="home-title" className={styles.hero_title}>
				現場の最前線で、チームをまとめ、どんな案件も立て直すフロントエンドエンジニア
			</h1>
			<p className={styles.hero_lead}>
				芸大卒・米国でプログラミングを学び、コロナ禍にエンジニアとしてキャリアをスタート。コミュニケーションと技術力で、納期内に成果を出すことを大切にしています。
			</p>
			<div className={styles.hero_intro}>
				<p>
					チーム開発では、技術的な課題解決とメンバー間の連携の両面から、プロジェクトの成功に貢献してきました。最新技術の習得と実践を心がけています。
				</p>
				<p>
					フロントエンドを中心に、UI/UX の改善やパフォーマンス最適化に取り組み、ユーザー体験を高める開発をしています。
				</p>
			</div>
			<SnsLinks githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
			<p className={styles.hero_career}>Webエンジニア Since 2021</p>
		</section>
	);
};

export default HomeTitle;
