import ContentsWrapper from "@/app/play_ground/_components/contents/ContentsWrapper";
import styles from "@/app/play_ground/_components/TransformAnimation.module.scss";

const TransformAnimation = () => {
	return (
		<ContentsWrapper
			created="2025-02-26"
			title="要素をアニメーションで動かす"
			isFlex={true}
		>
			<div className={styles.square} />
			<div className={styles.triangle} />
			<div className={styles.circle} />
		</ContentsWrapper>
	);
};

export default TransformAnimation;
