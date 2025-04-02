import styles from "@/components/base/Button/Button.module.scss";

type ButtonProps = {
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
}: ButtonProps) => {
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
