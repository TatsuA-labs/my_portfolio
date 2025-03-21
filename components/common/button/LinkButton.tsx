import Link from "next/link";
import styles from "@/components/common/button/LinkButton.module.scss";

type LinkButtonProps = {
	href: string;
	title: string;
}

const LinkButton = ({href, title}: LinkButtonProps) => {
  return (
		<Link href={href} className={styles.link}>
			{title}
		</Link>
  );
};

export default LinkButton;