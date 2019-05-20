import { useState } from "react";

/**
 * @param {*number} initValue 初始值
 * @param {*number} step 间距
 */
const useCounter = (initValue = 0, step = 1) => {
  if (isNaN(Number(step))) {
    throw 'useCounter parameter step must be Number';
  }
  const [value, setValue] = useState(initValue)
  const increase = () => {
    setValue(prev => prev + Number(step));
  }
  const decrease = () => {
    setValue(prev => prev - Number(step));
  }
  return [
    value,
    increase,
    decrease,
  ]
}

export { useCounter }
