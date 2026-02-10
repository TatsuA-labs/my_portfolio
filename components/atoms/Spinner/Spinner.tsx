import styles from "./Spinner.module.scss";

const Spinner = () => {
	return (
		<output className={styles.spinner} aria-label="読み込み中">
			<div className={styles.spinner_circle} />
		</output>
	);
};

export default Spinner;
