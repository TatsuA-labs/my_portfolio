import Button from "@/components/base/Button1/Button";
import { useModalStore } from "@/stores/modalStore";
import styles from "@/components/case/Dialog/MessageDialo.module.scss";

type MessageDialogProps = {
	title: string;
	message: string;
};
const MessageDialog = ({ title, message }: MessageDialogProps) => {
	const { closeModal } = useModalStore();

	return (
		<div className={styles.message_dialog}>
			<h3>{title}</h3>
			<p>{message}</p>
			<Button title="close" onClick={() => closeModal()} />
		</div>
	);
};

export default MessageDialog;
