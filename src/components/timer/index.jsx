import React from "react";
import { useCountDown } from '../../hooks'

const Timer = (props = {}) => {
  const showTimer = useCountDown(props.second || 60)
  return (
    <h3>倒计时{showTimer}</h3>
  )
}

export default Timer
