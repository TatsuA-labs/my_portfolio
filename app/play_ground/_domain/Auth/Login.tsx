import styles from "@/app/play_ground/_domain/Auth/Login.module.scss";
import SignIn from "@/app/play_ground/_domain/Auth/SignIn";
import SignOut from "@/app/play_ground/_domain/Auth/SignOut";
import UserAvatar from "@/app/play_ground/_domain/Auth/UserAvatar";
import { auth } from "@/auth";
import ContentCard from "@/components/atoms/Card/ContentCard";

const Login = async () => {
	const session = await auth();
	const component = session ? <SignOut /> : <SignIn />;
	const name = session?.user?.name ?? "";
	const image = session?.user?.image ?? "";

	return (
		<ContentCard created="2025-04-02" title="NextAuthを使ったGithubログイン">
			<div className={styles.login}>
				<div className={styles.login_info}>
					{session ? `${name}がログイン中` : "ログインしてください"}
					<UserAvatar image={image} />
				</div>
				{component}
			</div>
		</ContentCard>
	);
};

export default Login;
