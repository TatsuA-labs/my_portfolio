"use client";

import { ChangeEvent, useState } from "react";
import UseServerContents from "@/app/play_ground/_components/contents/UseServerContents";
import styles from "@/app/play_ground/_components/CountUp.module.scss";

const CountUp = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100000);

  const countUpInterval = 20; // 更新速度
  const countUpDuration = 2500; // 更新期間
  const maxSteps = countUpDuration / countUpInterval; // 更新回数
  const increment = value / maxSteps; // 一回の値の増加量

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const startCountUp = () => {
    setCount(0);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + increment;
      });
    }, countUpInterval);
  };
  return (
    <UseServerContents title="数値の上昇の表現">
      <div className={styles.count_up}>
        <h3>count: {Math.floor(count)}</h3>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="入力してください"
          defaultValue={value}
        />
        <button onClick={() => startCountUp()}>start</button>
      </div>
    </UseServerContents>
  );
};

export default CountUp;
