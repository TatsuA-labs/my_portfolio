"use client";
import { useState } from "react";
import styles from "@/app/play_ground/_domain/CountUp/CountUp.module.scss";
import CountUpText from "@/app/play_ground/_domain/CountUp/CountUpText";
import Button from "@/components/base/Button/Button";
import ContentCard from "@/components/base/Card/ContentCard";

export enum DisplayType {
	H1 = "H1",
	H2 = "H2",
	H3 = "H3",
	P = "P",
	Small = "Small",
}

const CountUp = () => {
	const [count, setCount] = useState(0);
	const [value, setValue] = useState(10000);
	const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.P);
	const countUpInterval = 20; // 更新速度
	const countUpDuration = 5000; // 更新期間
	const maxSteps = countUpDuration / countUpInterval; // 更新回数
	const increment = value / maxSteps; // 一回の値の増加量

	const startCountUp = () => {
		setCount(0);
		const interval = setInterval(() => {
			setCount((prev) => {
				if (prev >= value) {
					clearInterval(interval);
					return value;
				}
				const newVal = prev + increment;
				setNewDisplayType(newVal);
				return newVal;
			});
		}, countUpInterval);
	};

	const setNewDisplayType = (val: number) => {
		let displayEnum = DisplayType.Small;

		if (val >= 10000) {
			displayEnum = DisplayType.H1;
		} else if (val >= 5000) {
			displayEnum = DisplayType.H2;
		} else if (val >= 1000) {
			displayEnum = DisplayType.H3;
		} else if (val >= 500) {
			displayEnum = DisplayType.P;
		}
		setDisplayType(displayEnum);
	};

	return (
		<ContentCard created="2025-02-26" title="数値の上昇の表現">
			<div className={styles.count_up_wrapper}>
				<div className={styles.count_up}>
					<CountUpText count={count} displayType={displayType} />
					<input
						type="number"
						onChange={(e) => setValue(Number(e.target.value))}
						placeholder="入力してください"
						defaultValue={value}
					/>
					<div className={styles.button_wrapper}>
						<Button title={"スタート"} onClick={() => startCountUp()} />
					</div>
				</div>
			</div>
		</ContentCard>
	);
};

export default CountUp;
