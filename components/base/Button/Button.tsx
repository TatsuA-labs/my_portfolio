import styles from "@/components/base/button/Button.module.scss";

type LinkButtonProps = {
	onClick?: () => void;
	title: string;
	type?: "button" | "submit" | "reset";
	color?: "primary" | "secondary";
};

const Button = ({
	onClick,
	title,
	type = "button",
	color = "primary",
}: LinkButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${styles.button} ${styles[color]}`}
		>
			{title}
		</button>
	);
};

export default Button;
