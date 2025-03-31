import Spinner from "@/components/base/Spinner/Spinner";
import styles from "@/app/loading.module.scss";

export default function Loading() {
	return (
		<div className={styles.loading}>
			<Spinner />
		</div>
	);
}
