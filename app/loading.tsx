import styles from "@/app/loading.module.scss";
import Spinner from "@/components/atoms/Spinner/Spinner";

export default function Loading() {
	return (
		<div className={styles.loading}>
			<Spinner />
		</div>
	);
}
