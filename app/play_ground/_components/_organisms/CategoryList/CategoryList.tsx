"use client";
import Link from "next/link";
import styles from "./CategoryList.module.scss";

type Category = {
	id: string;
	name: string;
};

type CategoryListProps = {
	categories: Category[];
};

const CategoryList = ({ categories }: CategoryListProps) => {
	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		categoryId: string,
	) => {
		e.preventDefault();
		const targetElement = document.getElementById(categoryId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section
			className={styles.category_list}
			aria-labelledby="category-list-title"
		>
			<div className={styles.category_list_inner}>
				<h2 id="category-list-title" className={styles.category_list_title}>
					カテゴリ一覧
				</h2>
				<nav
					className={styles.category_links}
					aria-label="カテゴリナビゲーション"
				>
					{categories.map((category) => (
						<Link
							key={category.id}
							href={`#${category.id}`}
							className={styles.category_link}
							onClick={(e) => handleClick(e, category.id)}
							aria-label={`${category.name}セクションへ移動`}
						>
							{category.name}
						</Link>
					))}
				</nav>
			</div>
		</section>
	);
};

export default CategoryList;
