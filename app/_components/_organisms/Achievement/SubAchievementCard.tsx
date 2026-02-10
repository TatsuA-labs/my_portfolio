import styles from "./SubAchievementCard.module.scss";

type SubAchievementCardProps = {
	title: string;
	role: string;
	text: string;
};

const SubAchievementCard = ({ title, role, text }: SubAchievementCardProps) => {
	return (
		<li className={styles.wrapper}>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.role}>ロール: {role}</p>
			<p className={styles.text}>{text}</p>
		</li>
	);
};

export default SubAchievementCard;
