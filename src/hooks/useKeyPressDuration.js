import { useState, useEffect } from "react";

const useKeyPressDuration = (isTiming) => {
  const [duration, setDuration] = useState(0);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isTiming) {
        if (event.code === "Space" && !event.repeat) {
          setIsKeyPressed(true);
          setStartTime(performance.now());
        }
      } else {
        setIsKeyPressed(false);
        setDuration(0);
        setStartTime(null);
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === "Space" && isKeyPressed && !isTiming) {
        setIsKeyPressed(false);
        if (startTime) {
          const endTime = performance.now();
          const keyPressDuration = endTime - startTime;
          setDuration(keyPressDuration);
          setStartTime(null);
        }
      }
    };

    const interval = setInterval(() => {
      if (isKeyPressed && startTime && !isTiming) {
        const currentTime = performance.now();
        const keyPressDuration = currentTime - startTime;
        setDuration(keyPressDuration);
      }
    }, 10);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [isKeyPressed, startTime, isTiming]);

  return duration;
};

export default useKeyPressDuration;
