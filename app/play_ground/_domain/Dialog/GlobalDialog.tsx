import ContentCard from "@/components/base/Card/ContentCard";
import { useModal } from "@/hooks/useModal";

const GlobalDialog = () => {
	const { isOpen, content, closeModal } = useModal();

  const openDialog = () => {
    return 
  }
	return (
		<ContentCard created="2025-03-31" title="Webカメラへの接続" height={600}>
			<button type="button">open</button>
		</ContentCard>
	);
};

export default GlobalDialog;
