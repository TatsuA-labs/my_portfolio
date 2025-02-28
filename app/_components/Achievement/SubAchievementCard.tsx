import styles from "@/app/_components/Achievement/SubAchievementCard.module.scss";

type SubAchievementCardProps = {
  title: string;
  role: string;
  text: string;
};

const SubAchievementCard = ({ title, role, text }: SubAchievementCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info_container}>
        <h3>{title}</h3>
        <strong>ロール: {role}</strong>
        <p>{text}</p>
      </div>
      <div className={styles.image_container} />
    </div>
  );
};

export default SubAchievementCard;
