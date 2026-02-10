import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./CategoryGroup.module.scss";

type Feature = {
	id: number;
	title: string;
	description: string;
	category: string;
	component: React.ComponentType;
	created?: string;
};

type CategoryGroupProps = {
	categoryId: string;
	categoryName: string;
	features: Feature[];
};

const CategoryGroup = ({
	categoryId,
	categoryName,
	features,
}: CategoryGroupProps) => {
	if (features.length === 0) return null;

	return (
		<section
			id={categoryId}
			className={styles.category_group}
			aria-labelledby={`${categoryId}-title`}
		>
			<div className={styles.category_inner}>
				<h2 id={`${categoryId}-title`} className={styles.category_title}>
					{categoryName}
				</h2>
				<hr className={styles.category_hr} />
				<div className={styles.feature_cards}>
					{features.map((feature) => (
						<FeatureCard
							key={feature.id}
							title={feature.title}
							description={feature.description}
							created={feature.created}
							component={feature.component}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryGroup;
