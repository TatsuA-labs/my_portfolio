"use client";
import styles from "@/components/base/Dialog/GlobalDialogWrapper.module.scss";
import { useModalStore } from "@/stores/modalStore";

const GlobalDialog = () => {
	const { isOpen, content, closeModal } = useModalStore();

	if (!isOpen) return <></>;

	return (
		<div className={styles.dialog}>
			{content}
			<button type="button" onClick={() => closeModal()}>
				close
			</button>
		</div>
	);
};

export default GlobalDialog;
