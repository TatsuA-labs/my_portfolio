"use client";
import styles from "@/app/play_ground/_domain/Dialog/GlobalDialog.module.scss";
import Button from "@/components/base/Button1/Button";
import ContentCard from "@/components/base/Card1/ContentCard";
import MessageDialog from "@/components/case/Dialog/MessageDialog";
import { useModal } from "@/hooks/useModal";

const GlobalDialog = () => {
	const { openModal } = useModal();

	const openDialog = () => {
		return openModal(<MessageDialog title="title" message="message" />);
	};
	return (
		<ContentCard
			created="2025-03-31"
			title="グローバル管理のダイアログの追加"
			height={300}
		>
			<div className={styles.global_dialog}>
				<Button title="open" onClick={openDialog} />
			</div>
		</ContentCard>
	);
};

export default GlobalDialog;
