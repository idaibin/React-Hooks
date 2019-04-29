import React, { useState, useEffect } from "react";

const useCountDown = (seconds, end = 0, delay = 1000) => {
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

export default useCountDown;
