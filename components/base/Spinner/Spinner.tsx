import styles from "@/components/base/Spinner/Spinner.module.scss";

const LoadingCircle = () => {
	return (
		<div className={styles.loading_circle}>
			<div className={styles.circle_container}>
				<div className={styles.circle} />
				<div className={styles.inner_circle} />
			</div>
		</div>
	);
};

export default LoadingCircle;
