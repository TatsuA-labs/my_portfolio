import styles from "@/app/play_ground/_domain/TransformAnimation/TransformAnimation.module.scss";
import ContentCard from "@/components/atoms/Card/ContentCard";

const TransformAnimation = () => {
	return (
		<ContentCard
			created="2025-02-26"
			title="要素をアニメーションで動かす"
			isFlex={true}
			height={200}
		>
			<div className={styles.square} />
			<div className={styles.triangle} />
			<div className={styles.circle} />
		</ContentCard>
	);
};

export default TransformAnimation;
