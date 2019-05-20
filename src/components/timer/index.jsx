import React, { useState } from "react";
import { useCounter, useInterval } from '../../hooks'

import "./index.css";

const CountDown = ({delay = 1000}) => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(prev => prev + 1)
  }, delay)
  return <span>{count}</span>
}

const CounterDemo = () => {
  const [counter, increase, decrease] = useCounter(0, 5);

  return (
    <div>
      <span className="btn" onClick={increase}>increase</span>
      <span>{counter}</span>
      <span className="btn" onClick={counter > 0 ? decrease : () => {}}>decrease</span>
    </div>
  )
}

function InputDemo ({ delay, callback }) {
  return (
    <input
      type="number"
      value={delay}
      onChange={(e) => callback(e.target.value)}
    />
  )
}

const Timer = () => {
  const [delay, setDelay] = useState(1000);
  return (
    <div className="timer_wrap">
      <div>
        <h3>定时器修改频率</h3>
        <div className="flex align-center">
          <InputDemo delay={delay} callback={setDelay}/>
          <CountDown delay={delay} />
        </div>
        <CounterDemo />
      </div>
    </div>
  );
}

export default Timer
