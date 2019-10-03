import { useState, useEffect } from "react";

export default function useTimer(duration) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setIsOn(false);
    if (!duration) return;

    let timer = setTimeout(() => {
      timer = null;
      setIsOn(false);
    }, duration);

    setIsOn(true);

    return () => {
      setIsOn(false);
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [duration]);

  return isOn;
}
