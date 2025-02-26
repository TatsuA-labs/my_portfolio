import Image from "next/image";
import styles from "@/app/_components/Award/Award.module.scss";

const Award = () => {
  return (
    <div className={styles.award}>
      <div className={styles.title_wapper}>
        <h2>受賞歴</h2>
        <hr className={styles.hr} />
      </div>
      <div className={styles.content}>
        <div className={styles.award_info}>
          <small>2024-12-23</small>
          <h2>United uniqueness賞受賞</h2>
          <strong>賞の内容</strong>
          <pre>
            {
              "互いの価値観や視点の違いを好み\n相乗効果を生み続けている方へ贈られます"
            }
          </pre>
          <strong>いただいたコメント</strong>
          <p>
            技術力でチームを支えるだけでなく、
            チームメンバー一人ひとりに目を配り、
            円滑なコミュニケーションを通じ、役
            割の垣根なくチーム全体が成果を出せ
            るような動機付けを行える希少な頼れ
            る存在です。最後までやり切る責任感
            と実行力でPJの成功を導いてくれたこ とを称えます。
            引き続きよろしくお願いします！
          </p>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src="/award_2024_12_23.jpg"
            alt="Award image"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Award;
