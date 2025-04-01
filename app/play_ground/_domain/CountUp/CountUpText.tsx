"use client";
import { DisplayType } from "@/app/play_ground/_domain/CountUp/CountUp";

type CountUpTextProps = {
	count: number;
	displayType: DisplayType;
};

const CountUpText = ({ count, displayType }: CountUpTextProps) => {
	return (
		<>
			{displayType === DisplayType.H1 && <h1>count: {Math.floor(count)}</h1>}
			{displayType === DisplayType.H2 && <h2>count: {Math.floor(count)}</h2>}
			{displayType === DisplayType.H3 && <h3>count: {Math.floor(count)}</h3>}
			{displayType === DisplayType.P && <p>count: {Math.floor(count)}</p>}
			{displayType === DisplayType.Small && (
				<small>count: {Math.floor(count)}</small>
			)}
			<small>500, 1000, 5000, 10000以上でcountの文字を大きくする</small>
		</>
	);
};

export default CountUpText;
