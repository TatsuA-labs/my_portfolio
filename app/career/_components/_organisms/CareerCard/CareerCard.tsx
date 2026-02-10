import ExternalLinks from "@/components/molecules/ExternalLinks/ExternalLinks";
import ProjectTags from "@/components/molecules/ProjectTags/ProjectTags";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import styles from "./CareerCard.module.scss";

type Additional = {
	title: string;
	linkUrl: string;
};

type CareerCardProps = {
	term: string;
	name: string;
	role?: string;
	linkUrl?: string;
	projects?: string[];
	additionals: Additional[];
};

const CareerCard = ({
	term,
	name,
	role,
	linkUrl,
	projects,
	additionals,
}: CareerCardProps) => {
	return (
		<article className={styles.career_card}>
			<div className={styles.career_term}>{term}</div>
			<h3 className={styles.career_name}>
				{linkUrl ? (
					<Link
						href={linkUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.career_name_link}
						aria-label={`${name}（外部サイト）`}
					>
						{name}
						<HiExternalLink className={styles.career_name_icon} aria-hidden />
					</Link>
				) : (
					name
				)}
			</h3>
			{role && <div className={styles.career_role}>{role}</div>}
			{projects && projects.length > 0 && (
				<div className={styles.career_section}>
					<strong>担当案件</strong>
					<ProjectTags projects={projects} />
				</div>
			)}
			{additionals.length > 0 && (
				<div className={styles.career_section}>
					<ExternalLinks additionals={additionals} />
				</div>
			)}
		</article>
	);
};

export default CareerCard;
