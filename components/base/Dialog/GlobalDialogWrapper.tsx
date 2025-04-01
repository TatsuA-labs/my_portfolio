"use client";
import Button from "@/components/base/Button1/Button";
import styles from "@/components/base/Dialog/GlobalDialogWrapper.module.scss";
import { useModalStore } from "@/stores/modalStore";
import ReactDOM from "react-dom";

const GlobalDialogWrapper = () => {
	const { isOpen, content } = useModalStore();

	if (!isOpen) return <></>;

	return ReactDOM.createPortal(
		<div className={styles.global_dialog}>
			<div className={styles.dialog}>{content}</div>
		</div>,
		document.body,
	);
};

export default GlobalDialogWrapper;
