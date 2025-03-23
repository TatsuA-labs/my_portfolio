import styles from "@/app/career/_components/ContentsAdditonal.module.scss";
import LinkWithIcon from "@/components/common/Link/LinkWithIcon";

type Additional = {
	title: string;
	linkUrl: string;
};

type ContentsAdditonalProps = {
	additionals: Additional[];
};
const ContentsAdditonal = ({ additionals }: ContentsAdditonalProps) => {
	return (
		<>
			{additionals.length !== 0 && <strong>その他</strong>}
			{additionals.map((additional) => (
				<div className={styles.additional} key={additional.title}>
					{additional.linkUrl ? (
						<div className={styles.additional_link}>
							<LinkWithIcon href={additional.linkUrl}>
								{additional.title}
							</LinkWithIcon>
						</div>
					) : (
						additional.title
					)}
				</div>
			))}
		</>
	);
};

export default ContentsAdditonal;
