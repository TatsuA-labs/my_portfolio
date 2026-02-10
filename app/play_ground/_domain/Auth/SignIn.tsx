import styles from "@/app/play_ground/_domain/Auth/SignIn.module.scss";
import { signIn } from "@/auth";
import Button from "@/components/atoms/Button/Button";

const SignIn = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signIn();
			}}
			className={styles.form}
		>
			<Button type="submit" title="SignIn" />
		</form>
	);
};

export default SignIn;
