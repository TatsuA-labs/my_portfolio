import AboutSiteSection from "@/app/about_site/_components/_organisms/AboutSiteSection/AboutSiteSection";
import AIDevelopmentSection from "@/app/about_site/_components/_organisms/AIDevelopmentSection/AIDevelopmentSection";
import TechStackSection from "@/app/about_site/_components/_organisms/TechStackSection/TechStackSection";
import PageTitle from "@/components/molecules/PageTitle/PageTitle";
import styles from "@/app/about_site/page.module.scss";

const Page = () => {
	return (
		<div className={styles.page}>
			<PageTitle
				title="このサイトについて"
				lead="このポートフォリオサイトの技術選定と開発手法について紹介します。"
			/>
			<AboutSiteSection />
			<TechStackSection />
			<AIDevelopmentSection />
		</div>
	);
};

export default Page;
