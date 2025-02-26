import styles from "@/app/_components/Achievement/MainAchievementCard.module.scss";

type MainAchievementCardProps = {
  title: string;
  role: string;
  text: string;
  image_url: string;
};

const MainAchievementCard = ({
  title,
  role,
  text,
  // image_url,
}: MainAchievementCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info_container}>
        <h2>{title}</h2>
        <strong>ロール: {role}</strong>
        <p>{text}</p>
      </div>
      <div className={styles.image_container}>
        {/* <Image
          src={image_url}
          alt="top image"
          fill
          className={styles.image}
          priority
        /> */}
      </div>
    </div>
  );
};

export default MainAchievementCard;
