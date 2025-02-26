import { ReactNode } from "react";
import styles from "@/app/play_ground/_components/contents/UseServerContents.module.scss";

type UseServerContentsProps = {
  children: ReactNode;
  title: string;
  isFlex?: boolean;
};
const UseServerContents = ({
  children,
  title,
  isFlex,
}: UseServerContentsProps) => {
  return (
    <div className={styles.content_wrapper}>
      <h3>{title}</h3>
      <div className={`${isFlex && styles.flex_content} ${styles.content}`}>
        {children}
      </div>
    </div>
  );
};

export default UseServerContents;
