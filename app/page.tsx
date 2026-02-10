import Achievement from "@/app/_components/_organisms/Achievement/Achievement";
import Award from "@/app/_components/_organisms/Award/Award";
import HomeTitle from "@/app/_components/_organisms/HomeTitle/HomeTitle";
import Skill from "@/app/_components/_organisms/Skill/Skill";
import styles from "@/app/page.module.scss";
import { fetchSheetData } from "@/lib/api/fetchSheetData";

export const dynamic = "force-static";

export type AwardSheet = {
	data: {
		id: number;
		date: string;
		title: string;
		description: string;
		comment: string;
	}[];
};

export type AchievementSheet = {
	data: {
		id: number;
		isMain: boolean;
		title: string;
		role: string;
		text: string;
	}[];
};

export type FrameworkSheet = {
	data: {
		id: number;
		name: string;
		experience: number;
		usedYear: number;
		usedVersion: string;
	}[];
};

export type LangSheet = {
	data: {
		id: number;
		name: string;
		experience: number;
		usedYear: number;
	}[];
};

const Page = async () => {
	let awardsData: AwardSheet = { data: [] };
	let achievementsData: AchievementSheet = { data: [] };
	let frameworksData: FrameworkSheet = { data: [] };
	let langsData: LangSheet = { data: [] };

	try {
		[awardsData, achievementsData, frameworksData, langsData] =
			await Promise.all([
				fetchSheetData(process.env.SHEET_AWARD),
				fetchSheetData(process.env.SHEET_ACHIEVEMENT),
				fetchSheetData(process.env.SHEET_SKILL_FW),
				fetchSheetData(process.env.SHEET_SKILL_LANG),
			]);
	} catch (error) {
		console.error("データの取得に失敗しました:", error);
	}

	return (
		<main className={styles.page}>
			<HomeTitle
				githubUrl={process.env.NEXT_PUBLIC_GITHUB_URL}
				linkedinUrl={process.env.NEXT_PUBLIC_LINKEDIN_URL}
			/>
			<div className={styles.contents}>
				<div className={styles.section_wrapper}>
					<Skill frameworksData={frameworksData} langsData={langsData} />
				</div>
				<div className={styles.section_wrapper}>
					<Achievement achievementsData={achievementsData} />
				</div>
				<div className={styles.section_wrapper}>
					<Award awardsData={awardsData} />
				</div>
			</div>
		</main>
	);
};

export default Page;
