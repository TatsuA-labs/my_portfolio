import styles from "@/app/_components/Achievement/SubAchievementCard.module.scss";

type SubAchievementCardProps = {
  title: string;
  role: string;
  text: string;
  image_url: string;
};

const SubAchievementCard = ({
  title,
  role,
  text,
  image_url,
}: SubAchievementCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info_container}>
        <h3>{title}</h3>
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

export default SubAchievementCard;
