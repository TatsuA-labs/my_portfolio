import Image from "next/image";
import type { AwardSheet } from "@/app/page";
import styles from "./Award.module.scss";

type AwardProps = { awardsData: AwardSheet };

const Award = ({ awardsData }: AwardProps) => {
	if (awardsData.data.length === 0) return null;

	// 現状は一個しか想定していない
	const data = awardsData.data[0];

	return (
		<section className={styles.award} aria-labelledby="award-title">
			<div className={styles.title_wrapper}>
				<h2 id="award-title">受賞歴</h2>
				<hr className={styles.hr} />
			</div>
			<div className={styles.content}>
				<div className={styles.award_info}>
					<time dateTime={data.date} className={styles.date}>
						{data.date}
					</time>
					<h3 className={styles.award_title}>{data.title}受賞</h3>
					<div className={styles.section}>
						<strong className={styles.label}>賞の内容</strong>
						<p className={styles.pre_wrap}>{data.description}</p>
					</div>
					<div className={styles.section}>
						<strong className={styles.label}>いただいたコメント</strong>
						<p className={styles.pre_wrap}>{data.comment}</p>
					</div>
				</div>
				<div className={styles.image_wrapper}>
					<Image
						src="/award.jpg"
						alt={`${data.title}受賞のトロフィーや賞状の画像`}
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default Award;
