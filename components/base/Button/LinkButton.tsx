import Image from "next/image";
import Link from "next/link";
import styles from "@/components/base/Button/LinkButton.module.scss";

type LinkButtonProps = {
	href: string;
	title: string;
	AddIcon?: boolean;
};

const LinkButton = ({ href, title, AddIcon = false }: LinkButtonProps) => {
	return (
		<Link href={href} className={styles.link}>
			{title}
			{AddIcon && (
				<Image src="/link_icon.svg" alt="ink icon" width={16} height={16} />
			)}
		</Link>
	);
};

export default LinkButton;
