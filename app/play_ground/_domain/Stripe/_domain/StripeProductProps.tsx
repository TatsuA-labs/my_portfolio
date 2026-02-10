import Image from "next/image";
import styles from "@/app/play_ground/_domain/Stripe/_domain/StripeProduct.module.scss";
import type { Product } from "@/app/play_ground/_domain/Stripe/StripeDemo";
import Button from "@/components/atoms/Button/Button";

type StripeProductProps = {
	product: Product;
};

const StripeProduct = ({ product }: StripeProductProps) => {
	const handlePurchase = async (priceId: string) => {
		try {
			const res = await fetch("/api/stripe/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ priceId: priceId }),
			});

			const { url } = await res.json();
			window.location.href = url;
		} catch (error) {
			console.error("Error purchasing:", error);
		}
	};

	return (
		<div className={styles.product}>
			<h2>{product.name}</h2>
			<div className={styles.info_wrapper}>
				<Image
					className={styles.image}
					src={product.image}
					alt={product.name}
					width={150}
					height={150}
				/>
				<div className={styles.info}>
					<strong>{product.description}</strong>
					<p>Price: {product.price}</p>
					<Button
						title="購入"
						onClick={() => handlePurchase(product.priceId)}
					/>
				</div>
			</div>
		</div>
	);
};

export default StripeProduct;
