import { useEffect, useRef } from 'react';

/**
 *
 * @param {*function} callback
 * @param {*number} delay
 */
export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // 每次保存callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      // 使用最新的callback
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay])
}
