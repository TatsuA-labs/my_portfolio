import styles from "@/app/_components/Achievement/Achievement.module.scss";
import MainAchievementCard from "@/app/_components/Achievement/MainAchievementCard";
import SubAchievementCard from "@/app/_components/Achievement/SubAchievementCard";

const achievementList = [
  {
    id: 1,
    isMain: true,
    title: "All Typescript(Next15 & DDD)で作る社内向け宿泊予約システム",
    role: "フルスタックエンジニア & リードフロントエンドエンジニア",
    text: "2025年時点での最新フレームワークとDDDを使ったサービスの開発\nフロントエンドのリードを行いつつ、バックエンドの実装も担当",
    image_url: "/top_image.jpg",
  },
  {
    id: 2,
    isMain: false,
    title: "Next14を使ったブロックチェーンゲームゲーム",
    role: "フロントエンドエンジニア",
    text: "ブロックチェーンゲームの追加機能の開発",
    image_url: "/top_image.jpg",
  },
  {
    id: 3,
    isMain: false,
    title: "Vue3を使ったマーケットプレイス",
    role: "フロントエンドエンジニア",
    text: "NFTマーケットプレイスのNFT大量発行画面の開発",
    image_url: "/top_image.jpg",
  },
];
const Achievement = () => {
  return (
    <div className={styles.career}>
      <div className={styles.title_wapper}>
        <h2>開発実績</h2>
        <hr className={styles.hr} />
      </div>
      <div className={styles.list}>
        {achievementList.map((achievement) =>
          achievement.isMain ? (
            <MainAchievementCard
              key={`school-${achievement.id}`}
              title={achievement.title}
              role={achievement.role}
              text={achievement.text}
              image_url={achievement.image_url}
            />
          ) : (
            <SubAchievementCard
              key={`school-${achievement.id}`}
              title={achievement.title}
              role={achievement.role}
              text={achievement.text}
              image_url={achievement.image_url}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Achievement;
