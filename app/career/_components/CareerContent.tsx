import styles from "@/app/career/_components/CareerContent.module.scss";
import ContentsAdditonal from "@/app/career/_components/ContentsAdditonal";
import ContentsTitle from "@/app/career/_components/ContentsTitle";
import ContentWrapper from "@/app/career/_components/ContentWrapper";

type Additional = {
	title: string;
	linkUrl: string;
};

type CareerContentProps = {
	term: string;
	name: string;
	role?: string;
	linkUrl?: string;
	additionals: Additional[];
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
		<ContentWrapper>
			<div className={styles.career_info}>
				<ContentsTitle term={term} name={name} linkUrl={linkUrl} />
				<strong>担当業務</strong>
				{role && <p>{role}</p>}
				<ContentsAdditonal additionals={additionals} />
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
		</ContentWrapper>
	);
};

export default CareerContent;
