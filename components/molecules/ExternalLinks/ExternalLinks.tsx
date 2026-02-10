import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import styles from "./ExternalLinks.module.scss";

type Additional = {
	title: string;
	linkUrl: string;
};

type ExternalLinksProps = {
	additionals: Additional[];
};

const ExternalLinks = ({ additionals }: ExternalLinksProps) => {
	if (additionals.length === 0) return null;

	return (
		<nav className={styles.external_links} aria-label="追加情報リンク">
			{additionals.map((additional) => (
				<Link
					key={additional.title}
					href={additional.linkUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.external_link}
					aria-label={`${additional.title}（外部サイト）`}
				>
					<HiExternalLink className={styles.external_icon} aria-hidden />
					<span>{additional.title}</span>
				</Link>
			))}
		</nav>
	);
};

export default ExternalLinks;
