import styles from "./PageTitle.module.scss";

type PageTitleProps = {
	title: string;
	lead?: string;
};

const PageTitle = ({ title, lead }: PageTitleProps) => {
	return (
		<div className={styles.page_title}>
			<h1>{title}</h1>
			{lead && <p className={styles.page_title_lead}>{lead}</p>}
			<hr className={styles.page_title_hr} />
		</div>
	);
};

export default PageTitle;
