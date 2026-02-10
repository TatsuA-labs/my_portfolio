import CareerSection from "@/app/career/_components/_organisms/CareerSection/CareerSection";
import SchoolSection from "@/app/career/_components/_organisms/SchoolSection/SchoolSection";
import PageTitle from "@/components/molecules/PageTitle/PageTitle";
import styles from "@/app/career/page.module.scss";
import { fetchSheetData } from "@/lib/api/fetchSheetData";
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

	// データを新しいコンポーネント用の形式に変換
	const careersData = careers.data.map((career) => ({
		id: career.id,
		term: career.term,
		name: career.name,
		role: career.role,
		linkUrl: career.linkUrl,
		projects: parseProject(career.projects),
		additionals: parseAdditional(career.additionals),
	}));

	const schoolsData = schools.data.map((school) => ({
		id: school.id,
		term: school.term,
		name: school.name,
		linkUrl: school.linkUrl,
		additionals: parseAdditional(school.additionals),
	}));

	return (
		<main className={styles.page}>
			<PageTitle title="キャリア" />
			<CareerSection careers={careersData} />
			<SchoolSection schools={schoolsData} />
		</main>
	);
};

export default Page;
