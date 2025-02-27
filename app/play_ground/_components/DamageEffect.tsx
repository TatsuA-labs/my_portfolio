"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UseServerContents from "@/app/play_ground/_components/contents/UseServerContents";
import styles from "@/app/play_ground/_components/DamageEffect.module.scss";
import { getRandomInt } from "@/utils/getRandomNumber";

type Effects = {
  id: number;
  x: number;
  y: number;
};
const DamageEffect = () => {
  const [displayEffect, setDisplayEffect] = useState(0);
  const [effectCount, setEffectCount] = useState(100);
  const [intervalTime, setIntervalTime] = useState(50);
  const [effects, setEffects] = useState<Effects[]>([]);

  useEffect(() => {
    const newEffects = Array.from({ length: effectCount }, (_, i) => {
      return {
        id: i + 1,
        x: getRandomInt(90),
        y: getRandomInt(70, 0),
      };
    });
    setEffects(newEffects);
  }, [effectCount]);

  const startEffect = () => {
    let count = 0;
    const interval = setInterval(() => {
      setDisplayEffect(count);

      if (count >= effectCount) {
        clearInterval(interval);
        setTimeout(() => setDisplayEffect(0), 1000);
      }
      count++;
    }, intervalTime);
  };

  return (
    <UseServerContents title="星空エフェクト" height={500}>
      <div className={styles.damage_effect}>
        {effects.map((effect) => (
          <Image
            key={effect.id}
            src="/damage_effect.png"
            alt="Damage Effect"
            width={100}
            height={100}
            className={styles.effect_image}
            style={{
              left: `${effect.x}%`,
              top: `${effect.y}%`,
              display: displayEffect >= effect.id ? "" : "none",
            }}
          />
        ))}
        <div className={styles.input_wrapper}>
          <div className={styles.input_container}>
            <label htmlFor="count">エフェクトの数:</label>
            <input
              type="number"
              name="count"
              onChange={(e) => setEffectCount(Number(e.target.value))}
              placeholder="入力してください"
              defaultValue={effectCount}
            />
            <label htmlFor="interval">エフェクト表示間隔(ms):</label>
            <input
              type="number"
              name="interval"
              onChange={(e) => setIntervalTime(Number(e.target.value))}
              placeholder="入力してください"
              defaultValue={intervalTime}
            />
          </div>
          <button onClick={() => startEffect()} className={styles.width_150}>
            start
          </button>
        </div>
      </div>
    </UseServerContents>
  );
};

export default DamageEffect;
