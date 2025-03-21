import styles from "@/components/common/button/Button.module.scss";

type LinkButtonProps = {
	onClick?: () => void;
	title: string;
}

const Button = ({onClick, title}: LinkButtonProps) => {
  return (
		<button type="button" onClick={onClick} className={styles.button}>
			{title}
		</button>
  );
};

export default Button;