import type { AchievementSheet } from "@/app/page";
import styles from "./Achievement.module.scss";
import MainAchievementCard from "./MainAchievementCard";
import SubAchievementCard from "./SubAchievementCard";

type AchievementProps = {
	achievementsData: AchievementSheet;
};

const Achievement = ({ achievementsData }: AchievementProps) => {
	const mainAchievements = achievementsData.data.filter((a) => a.isMain);
	const subAchievements = achievementsData.data.filter((a) => !a.isMain);

	return (
		<section className={styles.achievement} aria-labelledby="achievement-title">
			<div className={styles.title_wrapper}>
				<h2 id="achievement-title">開発実績</h2>
				<hr className={styles.hr} />
			</div>
			{mainAchievements.length > 0 && (
				<div className={styles.main_section}>
					{mainAchievements.map((achievement) => (
						<MainAchievementCard
							key={`achievement-${achievement.id}`}
							title={achievement.title}
							role={achievement.role}
							text={achievement.text}
						/>
					))}
				</div>
			)}
			{subAchievements.length > 0 && (
				<ul className={styles.sub_section}>
					{subAchievements.map((achievement) => (
						<SubAchievementCard
							key={`achievement-${achievement.id}`}
							title={achievement.title}
							role={achievement.role}
							text={achievement.text}
						/>
					))}
				</ul>
			)}
		</section>
	);
};

export default Achievement;
