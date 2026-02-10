import CareerCard from "../CareerCard/CareerCard";
import styles from "./CareerSection.module.scss";

type Additional = {
	title: string;
	linkUrl: string;
};

type Career = {
	id: number;
	term: string;
	name: string;
	role?: string;
	linkUrl?: string;
	projects?: string[];
	additionals: Additional[];
};

type CareerSectionProps = {
	careers: Career[];
};

const CareerSection = ({ careers }: CareerSectionProps) => {
	// 昇順ソート（古いものが上）
	const sortedCareers = [...careers].sort((a, b) => a.id - b.id);

	return (
		<section className={styles.career_section} aria-labelledby="career-title">
			<div className={styles.section_inner}>
				<h2 id="career-title" className={styles.section_title}>
					職歴
				</h2>
				<hr className={styles.section_hr} aria-hidden="true" />
				<div className={styles.cards}>
					{sortedCareers.map((career) => (
						<CareerCard
							key={career.id}
							term={career.term}
							name={career.name}
							role={career.role}
							linkUrl={career.linkUrl}
							projects={career.projects}
							additionals={career.additionals}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CareerSection;
