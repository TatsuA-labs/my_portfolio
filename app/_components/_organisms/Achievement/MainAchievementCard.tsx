import styles from "./MainAchievementCard.module.scss";

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
		<article className={styles.wrapper}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.role}>ロール: {role}</p>
			<p className={styles.desc}>{text}</p>
		</article>
	);
};

export default MainAchievementCard;
