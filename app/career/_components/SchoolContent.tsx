import ContentsAdditonal from "@/app/career/_components/ContentsAdditonal";
import ContentsTitle from "@/app/career/_components/ContentsTitle";
import ContentWrapper from "@/app/career/_components/ContentWrapper";
import styles from "@/app/career/_components/SchoolContent.module.scss";

type Additional = {
	title: string;
	linkUrl: string;
};

type SchoolContentProps = {
	name: string;
	term: string;
	linkUrl?: string;
	additionals: Additional[];
};
const SchoolContent = ({
	term,
	name,
	linkUrl,
	additionals,
}: SchoolContentProps) => {
	return (
		<ContentWrapper>
			<div className={styles.career_info}>
				<ContentsTitle term={term} name={name} linkUrl={linkUrl} />
				<ContentsAdditonal additionals={additionals} />
			</div>
		</ContentWrapper>
	);
};

export default SchoolContent;
