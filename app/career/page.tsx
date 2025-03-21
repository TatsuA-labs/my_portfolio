import CareerContent from "@/app/career/_components/CareerContent";
import styles from "@/app/career/page.module.scss";
import { fetchSheetData } from "@/lib/fetchSheetData";

export type Additional = {
	id: number;
	title: string;
	linkUrl?: string;
};

export type CareerSheet = {
	data: {
		id: number;
		name: string;
		term: string;
		role: string;
		linkUrl: string;
		projects: string[];
		additionals: Additional[];
	}[];
};

export type SchoolSheet = {
	data: {
		id: number;
		name: string;
		term: string;
		linkUrl: string;
		additionals?: Additional[];
	}[];
};

const Page = async () => {
	const [careers, schools]: [CareerSheet, SchoolSheet] = await Promise.all([
		fetchSheetData(process.env.SHEET_SKILL_FW),
		fetchSheetData(process.env.SHEET_SKILL_LANG),
	]);

	console.log(careers);
	console.log(schools);
	return (
		<div className={styles.career}>
			<h1>職歴・学歴</h1>
			<div className={styles.title_wapper}>
				<h2>職歴</h2>
				<hr className={styles.hr} />
			</div>
			{careers.data.map((career) => (
				<CareerContent
					key={career.id}
					term={career.term}
					name={career.name}
					role={career.role}
					linkUrl={career.linkUrl}
					additionals={career.additionals}
					projects={career.projects}
				/>
			))}
			<div className={styles.title_wapper}>
				<h2>学歴</h2>
				<hr className={styles.hr} />
			</div>
			{schools.data.map((school) => (
				<CareerContent
					key={school.id}
					term={school.term}
					name={school.name}
					linkUrl={school.linkUrl}
					additionals={school.additionals}
				/>
			))}
		</div>
	);
};

export default Page;
