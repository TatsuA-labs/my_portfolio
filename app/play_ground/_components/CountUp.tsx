"use client";

import { useState } from "react";
import UseServerContents from "@/app/play_ground/_components/contents/UseServerContents";
import styles from "@/app/play_ground/_components/CountUp.module.scss";

enum DisplayType {
  P = "P",
  H3 = "H3",
  H2 = "H2",
  H1 = "H1",
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
    let displayEnum = DisplayType.P;

    if (val >= 10000) {
      displayEnum = DisplayType.H1;
    } else if (val >= 5000) {
      displayEnum = DisplayType.H2;
    } else if (val >= 1000) {
      displayEnum = DisplayType.H3;
    }
    setDisplayType(displayEnum);
  };

  return (
    <UseServerContents title="数値の上昇の表現">
      <div className={styles.count_up_wrapper}>
        <div className={styles.count_up}>
          {displayType === DisplayType.H1 && (
            <h1>count: {Math.floor(count)}</h1>
          )}
          {displayType === DisplayType.H2 && (
            <h2>count: {Math.floor(count)}</h2>
          )}
          {displayType === DisplayType.H3 && (
            <h3>count: {Math.floor(count)}</h3>
          )}
          {displayType === DisplayType.P && <p>count: {Math.floor(count)}</p>}
          <small>1000, 5000, 10000以上でcountの文字を大きくする</small>
          <input
            type="number"
            onChange={(e) => setValue(Number(e.target.value))}
            placeholder="入力してください"
            defaultValue={value}
          />
          <button onClick={() => startCountUp()}>start</button>
        </div>
      </div>
    </UseServerContents>
  );
};

export default CountUp;
