import styles from "@/app/_domain/Skill/Skill.module.scss";
import SkillList from "@/app/_domain/Skill/SkillList";
import type { FrameworkSheet, LangSheet } from "@/app/page";

type SkillProps = {
	frameworks: FrameworkSheet;
	langs: LangSheet;
};

const Skill = ({ frameworks, langs }: SkillProps) => {
	return (
		<div className={styles.skill}>
			<div className={styles.title_wapper}>
				<h2>経験スキル</h2>
				<hr className={styles.hr} />
			</div>
			<SkillList title="フレームワーク" contents={frameworks.data} />
			<SkillList title="言語" contents={langs.data} />
		</div>
	);
};

export default Skill;
