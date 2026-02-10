import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./SnsLinks.module.scss";

type SnsLinksProps = {
	githubUrl?: string;
	linkedinUrl?: string;
};

const SnsLinks = ({ githubUrl, linkedinUrl }: SnsLinksProps) => {
	const showGithub = githubUrl && githubUrl.length > 0;
	const showLinkedin = linkedinUrl && linkedinUrl.length > 0;

	if (!showGithub && !showLinkedin) return null;

	return (
		<nav className={styles.sns_links} aria-label="SNSリンク">
			{showGithub && (
				<Link
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.sns_link}
					aria-label="GitHub へ"
				>
					<FaGithub className={styles.sns_icon} aria-hidden />
				</Link>
			)}
			{showLinkedin && (
				<Link
					href={linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.sns_link}
					aria-label="LinkedIn へ"
				>
					<FaLinkedin className={styles.sns_icon} aria-hidden />
				</Link>
			)}
		</nav>
	);
};

export default SnsLinks;
