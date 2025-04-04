import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(): Promise<NextResponse> {
	try {
		const products = await stripe.products.list({ limit: 10 });
		const prices = await stripe.prices.list({ limit: 10 });

		const productData = products.data.map((product) => {
			const price = prices.data.find((p) => p.product === product.id);

			if (!price) {
				throw new Error("Price not found");
			}

			return {
				id: product.id,
				name: product.name,
				image: product.images[0],
				description: product.description,
				priceId: price.id,
				price: price.unit_amount,
			};
		});

		return NextResponse.json(productData);
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 500 },
		);
	}
}
