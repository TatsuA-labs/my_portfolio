import styles from "@/app/contact/page.module.scss";
import Button from "@/components/atoms/Button/Button";
import PageTitle from "@/components/molecules/PageTitle/PageTitle";

const Page = () => {
	return (
		<div className={styles.page}>
			<PageTitle title="コンタクト" />
			<div className={styles.contact}>
				<form className={styles.form}>
					<div className={styles.input_container}>
						<label htmlFor="name" className={styles.label}>
							お名前:{" "}
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className={styles.input}
							placeholder="田中 太郎"
							required
						/>
					</div>
					<div className={styles.input_container}>
						<label htmlFor="email" className={styles.label}>
							メールアドレス:{" "}
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className={styles.input}
							placeholder="example@example.com"
							required
						/>
					</div>
					<div className={styles.input_container}>
						<label htmlFor="message" className={styles.label}>
							メッセージ:{" "}
						</label>
						<textarea
							id="message"
							name="message"
							className={styles.textarea}
							required
						/>
					</div>
					<Button title="送信" />
				</form>
			</div>
		</div>
	);
};

export default Page;
