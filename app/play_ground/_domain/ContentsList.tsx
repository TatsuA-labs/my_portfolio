import Spinner from "@/app/play_ground/_domain/OriginalSpinner/OriginalSpinner";
import CountUp from "@/app/play_ground/_domain/CountUp/CountUp";
import DamageEffect from "@/app/play_ground/_domain/DamageEffect/DamageEffect";
import TransformAnimation from "@/app/play_ground/_domain/TransformAnimation/TransformAnimation";
import WebCamera from "@/app/play_ground/_domain/WebCamera/WebCamera";
import { Suspense } from "react";

const ContentsList = () => {
	const components = [
		{ id: 1, Component: TransformAnimation },
		{ id: 2, Component: CountUp },
		{ id: 3, Component: DamageEffect },
		{ id: 4, Component: WebCamera },
		{ id: 5, Component: Spinner },
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
