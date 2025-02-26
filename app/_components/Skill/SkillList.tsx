import styles from "@/app/_components/Skill/SkillList.module.scss";

type Contents = {
  id: number;
  name: string;
  experience: number;
  usedYear: string;
  usedVersion?: string;
};
type SlillListProps = {
  title: string;
  contents: Contents[];
};
const SlillList = ({ title, contents }: SlillListProps) => {
  return (
    <div className={styles.list}>
      <h3>{title}</h3>
      <div className={styles.contents}>
        {contents.map((data) => (
          <div className={styles.content} key={data.id}>
            <div className={styles.skill_info}>
              <h3>{data.name}</h3>
              <p>経験年数: {data.experience}年</p>
              <p>最終使用年度: {data.usedYear}</p>
              {data.usedVersion && (
                <p>最終使用バージョン: {data.usedVersion}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlillList;
