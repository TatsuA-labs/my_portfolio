import * as Dialog from "@radix-ui/react-dialog";
import Button from "@/components/atoms/Button/Button";
import { useModalStore } from "@/stores/modalStore";
import styles from "./MessageDialog.module.scss";

type MessageDialogProps = {
	title: string;
	message: string;
};

const MessageDialog = ({ title, message }: MessageDialogProps) => {
	const { closeModal } = useModalStore();

	return (
		<>
			<Dialog.Title className={styles.title}>{title}</Dialog.Title>
			<Dialog.Description className={styles.description} id="dialog-description">
				{message}
			</Dialog.Description>
			<div className={styles.button_wrapper}>
				<Dialog.Close asChild>
					<Button title="閉じる" onClick={() => closeModal()} />
				</Dialog.Close>
			</div>
		</>
	);
};

export default MessageDialog;
