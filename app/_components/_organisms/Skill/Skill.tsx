import type { FrameworkSheet, LangSheet } from "@/app/page";
import styles from "./Skill.module.scss";
import SkillList from "./SkillList";

type SkillProps = {
	frameworksData: FrameworkSheet;
	langsData: LangSheet;
};

const Skill = ({ frameworksData, langsData }: SkillProps) => {
	return (
		<section className={styles.skill} aria-labelledby="skill-title">
			<div className={styles.title_wrapper}>
				<h2 id="skill-title">経験スキル</h2>
				<p className={styles.lead}>業務・個人開発で使用している技術です。</p>
				<hr className={styles.hr} />
			</div>
			<SkillList title="フレームワーク" contents={frameworksData.data} />
			<SkillList title="言語" contents={langsData.data} />
		</section>
	);
};

export default Skill;
