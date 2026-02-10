import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import ExternalLinks from "@/components/molecules/ExternalLinks/ExternalLinks";
import styles from "./SchoolCard.module.scss";

type Additional = {
	title: string;
	linkUrl: string;
};

type SchoolCardProps = {
	term: string;
	name: string;
	linkUrl?: string;
	additionals: Additional[];
};

const SchoolCard = ({ term, name, linkUrl, additionals }: SchoolCardProps) => {
	return (
		<article className={styles.school_card}>
			<div className={styles.school_term}>{term}</div>
			<h3 className={styles.school_name}>
				{linkUrl ? (
					<Link
						href={linkUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.school_name_link}
						aria-label={`${name}（外部サイト）`}
					>
						{name}
						<HiExternalLink className={styles.school_name_icon} aria-hidden />
					</Link>
				) : (
					name
				)}
			</h3>
			{additionals.length > 0 && (
				<div className={styles.school_section}>
					<ExternalLinks additionals={additionals} />
				</div>
			)}
			{additionals.length === 0 && (
				<div className={styles.school_section}>
					{/* 追加情報がない場合でも、レイアウトを統一するための空のセクション */}
				</div>
			)}
		</article>
	);
};

export default SchoolCard;
