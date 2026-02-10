import styles from "./ProjectTags.module.scss";

type ProjectTagsProps = {
	projects: string[];
};

const ProjectTags = ({ projects }: ProjectTagsProps) => {
	if (projects.length === 0) return null;

	return (
		<ul className={styles.project_tags}>
			{projects.map((project) => (
				<li key={project} className={styles.project_tag}>
					{project}
				</li>
			))}
		</ul>
	);
};

export default ProjectTags;
