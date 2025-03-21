import Image from "next/image";
import styles from "@/app/_components/Award/Award.module.scss";
import type { AwardSheet } from "@/app/page";

type AwardProps = { awards: AwardSheet };
const Award = ({ awards }: AwardProps) => {
	// 現状は一個しか想定していない
	const data = awards.data[0];

	return (
		<div className={styles.award}>
			<div className={styles.title_wapper}>
				<h2>受賞歴</h2>
				<hr className={styles.hr} />
			</div>
			<div className={styles.content}>
				<div className={styles.award_info}>
					<small>{data.date}</small>
					<h2>{data.title}受賞</h2>
					<strong>賞の内容</strong>
					<p className={styles.pre_wrap}>{data.description}</p>
					<strong>いただいたコメント</strong>
					<p className={styles.pre_wrap}>{data.comment}</p>
				</div>
				<div className={styles.image_wrapper}>
					<Image
						src="/award.jpg"
						alt="Award image"
						fill
						objectFit="cover"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Award;
