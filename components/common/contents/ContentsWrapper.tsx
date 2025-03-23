import type { ReactNode } from "react";
import styles from "@/components/common/contents/ContentsWrapper.module.scss";

type ContentsWrapperProps = {
	children: ReactNode;
	created: string;
	title: string;
	isFlex?: boolean;
	height?: number;
};
const ContentsWrapper = ({
	children,
	created,
	title,
	isFlex,
	height = 200,
}: ContentsWrapperProps) => {
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

export default ContentsWrapper;
