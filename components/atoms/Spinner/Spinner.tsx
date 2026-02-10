import styles from "./Spinner.module.scss";

const Spinner = () => {
	return (
		<div className={styles.spinner} role="status" aria-label="読み込み中">
			<div className={styles.spinner_circle} />
		</div>
	);
};

export default Spinner;
