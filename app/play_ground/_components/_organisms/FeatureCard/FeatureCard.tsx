import type { ComponentType } from "react";
import { Suspense } from "react";
import Spinner from "@/app/play_ground/_domain/OriginalSpinner/OriginalSpinner";
import styles from "./FeatureCard.module.scss";

type FeatureCardProps = {
	title: string;
	description: string;
	created?: string;
	component: ComponentType;
};

const FeatureCard = ({
	title,
	description,
	created,
	component: Component,
}: FeatureCardProps) => {
	return (
		<article className={styles.feature_card}>
			{created && <div className={styles.feature_created}>{created}</div>}
			<h3 className={styles.feature_title}>{title}</h3>
			<p className={styles.feature_description}>{description}</p>
			<div className={styles.feature_demo}>
				<Suspense fallback={<Spinner />}>
					<Component />
				</Suspense>
			</div>
		</article>
	);
};

export default FeatureCard;
