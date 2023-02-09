import { useEffect, useRef } from "react";

export const useCounter = (isCount, countDown, setCountDown) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      if (!countDown) return;
      const timer = setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      didMount.current = true;
    }
  }, [countDown, isCount, setCountDown]);
};
