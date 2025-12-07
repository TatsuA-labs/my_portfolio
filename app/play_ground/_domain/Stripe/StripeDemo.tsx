"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import StripeProduct from "@/app/play_ground/_domain/Stripe/_domain/StripeProductProps";
import styles from "@/app/play_ground/_domain/Stripe/StripeDemo.module.scss";
import ContentCard from "@/components/base/Card/ContentCard";
import Spinner from "@/components/base/Spinner/Spinner";
import MessageDialog from "@/components/case/Dialog/MessageDialog";
import { useModal } from "@/hooks/useModal";

const statusList = ["success", "cancel"];

export type Product = {
	id: string;
	name: string;
	image: string;
	description: string;
	priceId: string;
	price: number;
};

const StripeDemo = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isPending, startTransition] = useTransition();
	const searchParams = useSearchParams();
	const status = searchParams.get("purchase");
	const { openModal } = useModal();

	const openDialog = useCallback(
		(status: string | null) => {
			if (!status || !statusList.includes(status)) return;

			const message =
				status === "success" ? "購入が完了しました" : "購入に失敗しました";

			openModal(<MessageDialog title={status} message={message} />);
			const newUrl = window.location.pathname;
			window.history.replaceState(null, "", newUrl);
		},
		[openModal],
	);

	useEffect(() => {
		openDialog(status);
	}, [status, openDialog]);

	useEffect(() => {
		// Serverで実装もできそうだが、色々試したいのでClient側で実装
		const fetchData = () => {
			startTransition(async () => {
				try {
					const products = await fetch("/api/stripe/products").then((res) =>
						res.json(),
					);
					setProducts(products);
				} catch (error) {
					console.error("Error fetching products:", error);
				}
			});
		};

		fetchData();
	}, []);

	return (
		<ContentCard created="2025-04-04" title="Stripeのデモ">
			{isPending ? (
				<Spinner />
			) : (
				<div className={styles.product}>
					<p>DemoCard: 4242 4242 4242 4242</p>
					<div className={styles.product_list}>
						{products.map((product) => (
							<StripeProduct key={product.id} product={product} />
						))}
					</div>
				</div>
			)}
		</ContentCard>
	);
};

export default StripeDemo;
