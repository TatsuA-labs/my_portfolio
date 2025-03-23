import styles from "@/app/play_ground/_components/TransformAnimation.module.scss";
import ContentsWrapper from "@/components/common/contents/ContentsWrapper";

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
