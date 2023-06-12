import { useState } from "react";
import { Card } from "@mui/material";
import { visualizeScramble } from "../../utils/cubeUtils";

const VisualizeScramble = ({ scramble, isLoading, event, dimension }) => {
  const events = {
    "3x3x3": "333",
    "2x2x2": "222",
    "4x4x4": "444",
    "5x5x5": "555",
    "6x6x6": "666",
    "7x7x7": "777",
    Clock: "clock",
    Megaminx: "minx",
    Pyraminx: "pyram",
    Skewb: "skewb",
    "Square-1": "sq1",
  };

  return (
    <Card sx={{ padding: "1em" }}>
      {isLoading
        ? visualizeScramble(events[event], "", dimension)
        : visualizeScramble(events[event], scramble, dimension)}
    </Card>
  );
};

export default VisualizeScramble;
