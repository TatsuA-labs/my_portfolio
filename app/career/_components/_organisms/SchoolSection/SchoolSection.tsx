import SchoolCard from "../SchoolCard/SchoolCard";
import styles from "./SchoolSection.module.scss";

type Additional = {
	title: string;
	linkUrl: string;
};

type School = {
	id: number;
	term: string;
	name: string;
	linkUrl?: string;
	additionals: Additional[];
};

type SchoolSectionProps = {
	schools: School[];
};

const SchoolSection = ({ schools }: SchoolSectionProps) => {
	// 降順ソート（最新が上）
	const sortedSchools = [...schools].sort((a, b) => b.id - a.id);

	return (
		<section className={styles.school_section} aria-labelledby="school-title">
			<div className={styles.section_inner}>
				<h2 id="school-title" className={styles.section_title}>
					学歴
				</h2>
				<hr className={styles.section_hr} />
				<div className={styles.cards}>
					{sortedSchools.map((school) => (
						<SchoolCard
							key={school.id}
							term={school.term}
							name={school.name}
							linkUrl={school.linkUrl}
							additionals={school.additionals}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SchoolSection;
