import { randomScrambleForEvent } from "cubing/scramble";
import { ScrambleDisplay } from "scramble-display";

export const getScramble = async (event) => {
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

  try {
    const scramble = await randomScrambleForEvent(events[event]);
    return scramble.toString();
  } catch (error) {
    console.error("Error fetching scramble:", error);
    return "";
  }
};

export const visualizeScramble = (event, scramble, dimension) => {
  return (
    <scramble-display
      event={event}
      scramble={scramble}
      visualization={`${dimension}` + "D"}
    ></scramble-display>
  );
};
