import styles from "@/app/career/_domain/ContentWrapper.module.scss";

type ContentWrapperProps = {
	children: React.ReactNode;
};
const ContentWrapper = ({ children }: ContentWrapperProps) => {
	return <div className={styles.content}>{children}</div>;
};

export default ContentWrapper;
