import CareerContent from "@/app/career/_domain/CareerContent";
import SchoolContent from "@/app/career/_domain/SchoolContent";
import styles from "@/app/career/page.module.scss";
import { fetchSheetData } from "@/lib/fetchSheetData";
import { parseAdditional, parseProject } from "@/utils/parseSheetData";

export type CareerSheet = {
	data: {
		id: number;
		name: string;
		term: string;
		role: string;
		linkUrl: string;
		projects: string;
		additionals: string;
	}[];
};

export type SchoolSheet = {
	data: {
		id: number;
		name: string;
		term: string;
		linkUrl: string;
		additionals: string;
	}[];
};

const Page = async () => {
	let careers: CareerSheet = { data: [] };
	let schools: SchoolSheet = { data: [] };

	try {
		const [careersData, schoolsData] = await Promise.all([
			fetchSheetData(process.env.SHEET_CAREER),
			fetchSheetData(process.env.SHEET_SCHOOL),
		]);
		careers = careersData;
		schools = schoolsData;
	} catch (error) {
		console.error("データの取得に失敗しました:", error);
	}

	return (
		<div className={styles.career}>
			<h1>職歴・学歴</h1>
			<div className={styles.title_wapper}>
				<h2>職歴</h2>
				<hr className={styles.hr} />
			</div>
			{careers.data?.map((career) => {
				return (
					<CareerContent
						key={career.id}
						term={career.term}
						name={career.name}
						role={career.role}
						linkUrl={career.linkUrl}
						additionals={parseAdditional(career.additionals)}
						projects={parseProject(career.projects)}
					/>
				);
			})}
			<div className={styles.title_wapper}>
				<h2>学歴</h2>
				<hr className={styles.hr} />
			</div>
			{schools.data?.map((school) => (
				<SchoolContent
					key={school.id}
					name={school.name}
					term={school.term}
					linkUrl={school.linkUrl}
					additionals={parseAdditional(school.additionals)}
				/>
			))}
		</div>
	);
};

export default Page;
