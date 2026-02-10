"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useModalStore } from "@/stores/modalStore";
import styles from "./GlobalDialogWrapper.module.scss";

const GlobalDialogWrapper = () => {
	const { isOpen, content, closeModal } = useModalStore();

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />
				<Dialog.Content className={styles.content}>{content}</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default GlobalDialogWrapper;
