import { useState } from "react";

const useTimer = () => {
  const [isTiming, setIsTiming] = useState(false);
  const [duration, setDuration] = useState(0);

  const toggleIsTiming = () => {
    setIsTiming(1-isTiming);
  }

  return { isTiming, setIsTiming, toggleIsTiming};
};

export default useTimer;
