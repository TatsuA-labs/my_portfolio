import styles from "@/app/_components/Skill/Skill.module.scss";
import SkillList from "@/app/_components/Skill/SkillList";

const FWList = [
  {
    id: 1,
    name: "React",
    experience: 3,
    usedYear: "2025",
    usedVersion: "React 19",
  },
  {
    id: 2,
    name: "NextJs",
    experience: 2,
    usedYear: "2025",
    usedVersion: "Next 15",
  },
  {
    id: 3,
    name: "Vue.js",
    experience: 1,
    usedYear: "2023",
    usedVersion: "Vue3",
  },
  {
    id: 4,
    name: "Laravel",
    experience: 1,
    usedYear: "2023",
    usedVersion: "Laravel 8",
  },
  {
    id: 5,
    name: "Ruby on Rails",
    experience: 1,
    usedYear: "2022",
    usedVersion: "Rails 6",
  },
];
const LangList = [
  {
    id: 1,
    name: "TypeScript",
    experience: 3,
    usedYear: "2025",
  },
  {
    id: 2,
    name: "PHP",
    experience: 1,
    usedYear: "2023",
  },
  {
    id: 3,
    name: "Ruby",
    experience: 1,
    usedYear: "2023",
  },
];

const Career = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.title_wapper}>
        <h2>経験スキル</h2>
        <hr className={styles.hr} />
      </div>
      <SkillList title="フレームワーク" contents={FWList} />
      <SkillList title="言語" contents={LangList} />
    </div>
  );
};

export default Career;
