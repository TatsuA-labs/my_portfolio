import styles from "@/app/_domain/Achievement/Achievement.module.scss";
import MainAchievementCard from "@/app/_domain/Achievement/MainAchievementCard";
import SubAchievementCard from "@/app/_domain/Achievement/SubAchievementCard";
import type { AchievementSheet } from "@/app/page";

type AchievementProps = {
	achievements: AchievementSheet;
};

const Achievement = ({ achievements }: AchievementProps) => {
	return (
		<div className={styles.career}>
			<div className={styles.title_wapper}>
				<h2>開発実績</h2>
				<hr className={styles.hr} />
			</div>
			<div className={styles.list}>
				{achievements.data.map((achievement) =>
					achievement.isMain ? (
						<MainAchievementCard
							key={`school-${achievement.id}`}
							title={achievement.title}
							role={achievement.role}
							text={achievement.text}
						/>
					) : (
						<SubAchievementCard
							key={`school-${achievement.id}`}
							title={achievement.title}
							role={achievement.role}
							text={achievement.text}
						/>
					),
				)}
			</div>
		</div>
	);
};

export default Achievement;
