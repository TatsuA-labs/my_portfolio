import Achievement from "app/_components/Achievement/Achievement";
import HomeTitle from "app/_components/HomeTitle";
import Award from "@/app/_components/Award/Award";
import Skill from "@/app/_components/Skill/Skill";
import styles from "@/app/page.module.scss";
import { fetchSheetData } from "@/lib/fetchSheetData";

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
	let awards: AwardSheet = { data: [] };
	let achievements: AchievementSheet = { data: [] };
	let frameworks: FrameworkSheet = { data: [] };
	let langs: LangSheet = { data: [] };

	try {
		const [awardsData, achievementsData, frameworksData, langsData]: [
			AwardSheet,
			AchievementSheet,
			FrameworkSheet,
			LangSheet,
		] = await Promise.all([
			fetchSheetData(process.env.SHEET_AWARD),
			fetchSheetData(process.env.SHEET_ACHIEVEMENT),
			fetchSheetData(process.env.SHEET_SKILL_FW),
			fetchSheetData(process.env.SHEET_SKILL_LANG),
		]);
		awards = awardsData;
		achievements = achievementsData;
		frameworks = frameworksData;
		langs = langsData;
	} catch (error) {
		console.error("データの取得に失敗しました:", error);
	}

	return (
		<div className={styles.page}>
			<HomeTitle />
			<div className={styles.contents}>
				<Award awards={awards} />
				<Achievement achievements={achievements} />
				<Skill frameworks={frameworks} langs={langs} />
			</div>
		</div>
	);
};

export default Page;
