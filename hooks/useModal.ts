import { useModalStore } from "@/stores/modalStore";

export const useModal = () => {
	const { isOpen, content, openModal, closeModal } = useModalStore();
	return { isOpen, content, openModal, closeModal };
};
