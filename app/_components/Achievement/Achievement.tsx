import styles from "@/app/_components/Achievement/Achievement.module.scss";
import MainAchievementCard from "@/app/_components/Achievement/MainAchievementCard";
import SubAchievementCard from "@/app/_components/Achievement/SubAchievementCard";

// const schoolList = [
//   {
//     id: 1,
//     name: "大阪芸術大学 芸術学部 文芸学科",
//     term: "2012 ~ 2017",
//     link: "https://www.osaka-geidai.ac.jp/departments/literaryarts",
//     details: [
//       {
//         id: 1,
//         title: "大阪NHK 竹内街道１４００年祭「芸術と歴史街道」へ短歌の展示",
//         link: "https://www.osaka-geidai.ac.jp/topics/takeuchi_topics_2013",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Grossmont College Computer Science Infomation System",
//     term: "2020 ~ 2021",
//     link: "https://www.grossmont.edu/academics/programs/csis/index.php",
//     details: [],
//   },
// ];
// const careerList = [
//   {
//     id: 1,
//     name: "株式会社クロコ ITシステム開発事業部 フルスタックエンジニア",
//     term: "2021 ~ 2023",
//     link: "https://kuroco.jp/",
//     details: [
//       {
//         id: 1,
//         title: "社員インタビュー",
//         link: "https://interview.kuroco.jp/it/20220413-572/",
//       },
//       {
//         id: 2,
//         title: "社員総会司会担当",
//         link: "",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "株式会社テコテック 次世代開発事業部 フロントエンジニア",
//     term: "2023 ~ 現在",
//     link: "https://www.tecotec.co.jp/",
//     details: [
//       {
//         id: 1,
//         title: "United uniqueness賞 受賞（リンク先、受賞者写真右上）",
//         link: "https://www.tecotec.co.jp/recruit/news/20241223.html",
//       },
//     ],
//   },
// ];

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
