import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/common/Link/LinkWithIcon.module.scss";

type LinkWithIconProps = {
	children: ReactNode;
	href: string;
};
const LinkWithIcon = ({children, href }: LinkWithIconProps) => {
	return (
		<Link
			className={styles.link}
			href={href}
			target="_blank"
			rel="noopener"
		>
			{children}
			<Image src="/link_icon.svg" alt="ink icon" width={16} height={16} />
		</Link>
	);
};

export default LinkWithIcon;
