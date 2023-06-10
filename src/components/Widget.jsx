import { Card } from "@mui/material";
import VisualizeScramble from "./widgets/VisualizeScramble";

const Widget = ({ scramble, isLoading, event, setEvent, refreshScramble }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "fixed",
        bottom: "0",
        right: "0",
        margin: "1em",
        padding: "1em",
      }}
    >
      <VisualizeScramble
        scramble={scramble}
        isLoading={isLoading}
        event={event}
        setEvent={setEvent}
        refreshScramble={refreshScramble}
      />
    </Card>
  );
};

export default Widget;
