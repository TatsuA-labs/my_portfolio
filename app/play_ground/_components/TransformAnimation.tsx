import UseServerContents from "@/app/play_ground/_components/contents/UseServerContents";
import styles from "@/app/play_ground/_components/TransformAnimation.module.scss";

const TransformAnimation = () => {
  return (
    <UseServerContents title="要素をアニメーションで動かす" isFlex={true}>
      <div className={styles.square} />
      <div className={styles.triangle} />
      <div className={styles.circle} />
    </UseServerContents>
  );
};

export default TransformAnimation;
