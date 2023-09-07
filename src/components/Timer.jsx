import Flex from "./Flex";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useKeyPressDuration from "../hooks/useKeyPressDuration";

const Timer = ({ isTiming, setIsTiming, toggleIsTiming, refreshScramble }) => {
  const duration = useKeyPressDuration(isTiming);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        if (isTiming) {
          refreshScramble()
        }
        setIsTiming(false);
        setIsKeyPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        setIsKeyPressed(false);
        if (duration >= 1000) {
          setIsTiming(true);
          setStartTime(performance.now());
        }
      }
    };

    const interval = setInterval(() => {
      if (isTiming) {
        const currentTime = performance.now();
        const liveTime = currentTime - startTime;
        setTime(liveTime);
      }
    }, 10);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Clean up the interval when isTiming becomes false
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isTiming, duration, setIsTiming, startTime]);

  return (
    <Flex sx={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
      <Typography
        fontSize={"7rem"}
        fontFamily={"Space Mono"}
        color={
          isKeyPressed
            ? duration >= 1000
              ? "green"
              : duration === 0
              ? "white"
              : "red"
            : null
        }
      >
        {(time / 1000).toFixed(2)} 
      </Typography>
    </Flex>
  );
};

export default Timer;
