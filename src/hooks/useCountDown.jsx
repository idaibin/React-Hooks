import { useState } from "react";

import { useInterval } from './index'
/**
 *
 * @param {*number} seconds 倒计时秒数
 * @param {*number} delay 倒计时间隔
 */
const end = 0
export const useCountDown = (seconds, delay = 1000) => {
  const [second, setSecond] = useState(seconds);
  const [run, setRun] = useState(true);

  useInterval(() => {
    if (second <= end) setRun(false);
    else setSecond(second - 1);
  }, run ? delay : null);

  return second;
};

