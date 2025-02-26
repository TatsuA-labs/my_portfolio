import CareerContent from "@/app/career/_components/CareerContent";
import styles from "@/app/career/page.module.scss";

const careerList = [
  {
    id: "career_list_1",
    term: "2023-04-01 ~ 現在",
    name: "株式会社テコテック",
    role: "フロントエンドエンジニア/リードフロントエンドエンジニア",
    linkUrl: "https://www.tecotec.co.jp/",
    projects: [
      "ブロックチェーンゲーム機能開発",
      "宿泊施設予約システム新規開発",
      "医療従事者向け管理システム新規開発",
      "ブロックチェーンマーケットプレイス機能開発",
    ],
    additionals: [
      {
        id: "additional_list_1",
        title: "United uniqueness賞 受賞",
        linkUrl: "https://www.tecotec.co.jp/recruit/news/20241223.html",
      },
    ],
  },
  {
    id: "career_list_2",
    term: "2021-06-01 ~ 2023-03-01",
    name: "株式会社クロコ",
    role: "フルスタックエンジニア",
    linkUrl: "https://kuroco.jp/",
    projects: [
      "ネットショップ作成サービス機能開発",
      "社内向け排気ガス管理システム機能開発",
    ],
    additionals: [
      {
        id: "additional_list_1",
        title: "社員インタビュー",
        linkUrl: "https://interview.kuroco.jp/it/20220413-572/",
      },
      {
        id: "additional_list_2",
        title: "社員総会司会担当",
        linkUrl: "",
      },
    ],
  },
];

const schoolList = [
  {
    id: "school_list_1",
    name: "大阪芸術大学 芸術学部 文芸学科",
    term: "2012-4 ~ 2017-03",
    linkUrl: "https://www.osaka-geidai.ac.jp/departments/literaryarts",
    additionals: [
      {
        id: "additional_list_1",
        title: "大阪NHK 竹内街道１４００年祭「芸術と歴史街道」へ短歌の展示",
        linkUrl: "https://www.osaka-geidai.ac.jp/topics/takeuchi_topics_2013",
      },
    ],
  },
  {
    id: "school_list_2",
    name: "Grossmont College Computer Science Infomation System",
    term: "2020-09 ~ 2021-06",
    linkUrl: "https://www.grossmont.edu/academics/programs/csis/index.php",
  },
];

const Page = () => {
  return (
    <div className={styles.career}>
      <h1>職歴・学歴</h1>
      <div className={styles.title_wapper}>
        <h2>職歴</h2>
        <hr className={styles.hr} />
      </div>
      {careerList.map((career) => (
        <CareerContent
          key={career.id}
          term={career.term}
          name={career.name}
          role={career.role}
          linkUrl={career.linkUrl}
          additionals={career.additionals}
          projects={career.projects}
        />
      ))}
      <div className={styles.title_wapper}>
        <h2>学歴</h2>
        <hr className={styles.hr} />
      </div>
      {schoolList.map((school) => (
        <CareerContent
          key={school.id}
          term={school.term}
          name={school.name}
          linkUrl={school.linkUrl}
          additionals={school.additionals}
        />
      ))}
    </div>
  );
};

export default Page;
