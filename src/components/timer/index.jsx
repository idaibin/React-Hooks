import React, { useState } from "react";
import { useCountDown, useInterval } from '../../hooks'

import "./index.css";

const Timer = () => {
  const countDown1 = useCountDown(20);
  const countDown2 = useCountDown(40);
  const countDown3 = useCountDown(60);

  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1)
  }, delay)

  return (
    <div className="timer_wrap">
      <ul className="tl">
        <li> 倒计时1 {countDown1}</li>
        <li> 倒计时2 {countDown2}</li>
        <li> 倒计时3 {countDown3}</li>
      </ul>
      <div>
        <h3>定时器修改频率</h3>
        <div className="flex align-center">
          <input
            type="number"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
          />
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default Timer
