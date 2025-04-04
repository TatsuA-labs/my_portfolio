import { Suspense } from "react";
import Login from "@/app/play_ground/_domain/Auth/Login";
import CountUp from "@/app/play_ground/_domain/CountUp/CountUp";
import DamageEffect from "@/app/play_ground/_domain/DamageEffect/DamageEffect";
import GlobalDialog from "@/app/play_ground/_domain/Dialog/GlobalDialog";
import Spinner from "@/app/play_ground/_domain/OriginalSpinner/OriginalSpinner";
import StripeDemo from "@/app/play_ground/_domain/Stripe/StripeDemo";
import TransformAnimation from "@/app/play_ground/_domain/TransformAnimation/TransformAnimation";
import WebCamera from "@/app/play_ground/_domain/WebCamera/WebCamera";

const ContentsList = () => {
	const components = [
		{ id: 1, Component: TransformAnimation },
		{ id: 2, Component: CountUp },
		{ id: 3, Component: DamageEffect },
		{ id: 4, Component: WebCamera },
		{ id: 5, Component: Spinner },
		{ id: 6, Component: GlobalDialog },
		{ id: 7, Component: Login },
		{ id: 8, Component: StripeDemo },
	];

	return (
		<>
			{components.map(({ id, Component }) => (
				<Suspense key={id} fallback={<Spinner />}>
					<Component />
				</Suspense>
			))}
		</>
	);
};

export default ContentsList;
