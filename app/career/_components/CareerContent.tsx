import Link from "next/link";
import styles from "@/app/career/_components/CareerContent.module.scss";
import type { Additional } from "@/app/career/page";

type CareerContentProps = {
	term: string;
	name: string;
	role?: string;
	linkUrl?: string;
	additionals?: Additional[];
	projects?: string[];
};
const CareerContent = ({
	term,
	name,
	role,
	linkUrl,
	additionals,
	projects,
}: CareerContentProps) => {
	return (
		<div className={styles.content}>
			<div className={styles.career_info}>
				<small>{term}</small>
				{linkUrl ? (
					<Link
						className={styles.link}
						href={linkUrl}
						target="_blank"
						rel="noopener"
					>
						{name}
					</Link>
				) : (
					<p className={styles.link}>{name}</p>
				)}
				<strong>担当業務</strong>
				{role && <p>{role}</p>}
				<strong>その他</strong>
				{additionals?.map((additional) => (
					<div className={styles.additional} key={additional.id}>
						{additional.linkUrl ? (
							<div className={styles.additional_link}>
								<Link href={additional.linkUrl}>{additional.title}</Link>
							</div>
						) : (
							additional.title
						)}
					</div>
				))}
			</div>
			{projects && (
				<div className={styles.projects}>
					<strong>担当案件</strong>
					<ul>
						{projects.map((project) => (
							<li key={project}>{project}</li>
						))}
						<li>ブロックチェーンゲーム機能開発</li>
						<li>宿泊施設予約システム新規開発</li>
						<li>医療従事者向け管理システム新規開発</li>
						<li>ブロックチェーンマーケットプレイス機能開発</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default CareerContent;
