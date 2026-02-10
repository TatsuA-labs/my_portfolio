"use client";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	title: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	ariaLabel?: string;
	children?: ReactNode;
};

const Button = ({
	title,
	onClick,
	type = "button",
	disabled = false,
	ariaLabel,
	children,
}: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={styles.button}
			aria-label={ariaLabel}
		>
			{title}
			{children}
		</button>
	);
};

export default Button;
