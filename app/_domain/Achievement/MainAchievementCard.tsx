import styles from "@/app/_domain/Achievement/MainAchievementCard.module.scss";

type MainAchievementCardProps = {
	title: string;
	role: string;
	text: string;
};

const MainAchievementCard = ({
	title,
	role,
	text,
}: MainAchievementCardProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.info_container}>
				<h2>{title}</h2>
				<strong>ロール: {role}</strong>
				<p className={styles.pre_wrap}>{text}</p>
			</div>
			<div className={styles.image_container} />
		</div>
	);
};

export default MainAchievementCard;
