import type { ReactNode } from "react";
import styles from "./ContentCard.module.scss";

type ContentCardProps = {
	created?: string;
	title: string;
	height?: number;
	isFlex?: boolean;
	children: ReactNode;
};

const ContentCard = ({
	created,
	title,
	height,
	isFlex = false,
	children,
}: ContentCardProps) => {
	return (
		<div className={styles.content_card}>
			{created && <div className={styles.created}>{created}</div>}
			<h3 className={styles.title}>{title}</h3>
			<div
				className={`${styles.content} ${isFlex ? styles.flex : ""}`}
				style={height ? { height: `${height}px` } : undefined}
			>
				{children}
			</div>
		</div>
	);
};

export default ContentCard;
