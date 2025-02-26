import Image from "next/image";
import styles from "@/app/_components/HomeTitle.module.scss";

const HomeTitle = () => {
  return (
    <div className={styles.title}>
      <div className={styles.titleContainer}>
        <h2 className={styles.name}>
          現場の最前線で、チームをまとめ、どんな案件も立て直すフロントエンドエンジニア
        </h2>
        <p className={styles.text}>
          芸大を出て、アメリカでプログラミングを勉強し、コロナ禍の真っ只中でエンジニアデビュー
        </p>
        <p className={styles.text}>
          高いコミニュケーション能力と、技術的好奇心でどんな案件も納期内に完了した実績
        </p>
        <small className={styles.career}>Webエンジニア Since 2021</small>
      </div>
      <div className={styles.image_wrapper}>
        <Image
          src="/top_image.jpg"
          alt="top image"
          fill
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default HomeTitle;
