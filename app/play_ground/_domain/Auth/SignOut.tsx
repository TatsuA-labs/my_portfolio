import styles from "@/app/play_ground/_domain/Auth/SignOut.module.scss";
import { signOut } from "@/auth";
import Button from "@/components/base/Button/Button";

const SignOut = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
			className={styles.form}
		>
			<Button type="submit" title="SignOut" />
		</form>
	);
};

export default SignOut;
