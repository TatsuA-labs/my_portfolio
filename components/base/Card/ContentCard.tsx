import type { ReactNode } from "react";
import styles from "@/components/base/Card/ContentCard.module.scss";

type ContentCardProps = {
	children: ReactNode;
	created: string;
	title: string;
	isFlex?: boolean;
	height?: number | "100%";
};

const ContentCard = ({
	children,
	created,
	title,
	isFlex,
	height = "100%",
}: ContentCardProps) => {
	return (
		<div className={styles.content_wrapper}>
			<small>{created}</small>
			<h3>{title}</h3>
			<div
				className={`${isFlex && styles.flex_content} ${styles.content}`}
				style={{ height: height }}
			>
				{children}
			</div>
		</div>
	);
};

export default ContentCard;
