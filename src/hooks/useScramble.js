import { useState, useEffect } from "react";
import { getScramble } from "../utils/cubeUtils";

const useScramble = () => {
  const [scramble, setScramble] = useState("");
  const [event, setEvent] = useState("3x3x3");
  const [isLoading, setIsLoading] = useState(true);

  const refreshScramble = () => {
    getScramble(event).then((scramble) => {
      setScramble(scramble);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getScramble(event).then((scramble) => {
        setScramble(scramble);
        setIsLoading(false);
      });
    }, 600);
  }, [event]);

  return { scramble, event, isLoading, setEvent, refreshScramble };
};

export default useScramble;
