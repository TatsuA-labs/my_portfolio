import styles from "./SkillList.module.scss";

type Contents = {
	id: number;
	name: string;
	experience: number;
	usedYear: number;
	usedVersion?: string;
};

type SkillListProps = {
	title: string;
	contents: Contents[];
};

const SkillList = ({ title, contents }: SkillListProps) => {
	if (contents.length === 0) return null;

	return (
		<div className={styles.category}>
			<h3 className={styles.category_title}>{title}</h3>
			<ul className={styles.skill_grid}>
				{contents.map((data) => (
					<li className={styles.skill_card} key={data.id}>
						<div className={styles.skill_name}>{data.name}</div>
						<div className={styles.skill_meta}>
							経験 {data.experience}年 · 最終使用 {data.usedYear}年
							{data.usedVersion && ` · ${data.usedVersion}`}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillList;
