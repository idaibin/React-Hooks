import { useState, useEffect } from "react";

/**
 *
 * @param {*} seconds 倒计时秒数
 * @param {*} delay 倒计时间隔
 */
const end = 0
const useCountDown = (seconds, delay = 1000) => {
  let timer = null;
  const [second, setSecond] = useState(seconds);
  useEffect(() => {
    timer = setTimeout(() => {
      if (second > end) setSecond(second - 1);
    }, delay);
    return () => clearTimeout(timer);
  });
  return second;
};

export default useCountDown
