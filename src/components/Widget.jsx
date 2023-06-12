import { Card, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import VisualizeScramble from "./widgets/VisualizeScramble";

const Widget = ({ scramble, isLoading, event, setEvent, refreshScramble }) => {
  const [widget, setWidget] = useState("2D");

  const components = {
    "2D": (
      <VisualizeScramble
        scramble={scramble}
        isLoading={isLoading}
        event={event}
        dimension={2}
      />
    ),
    "3D": (
      <VisualizeScramble
        scramble={scramble}
        isLoading={isLoading}
        event={event}
        dimension={3}
      />
    ),
  };

  const handleChange = (event, target) => {
    setWidget(target.props.value);
  };

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
      {components[widget]}
      <FormControl fullWidth sx={{ marginTop: "1em" }}>
        <InputLabel id="demo-simple-select-label">Tool</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={widget}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"2D"}>Draw Scramble 2D</MenuItem>
          <MenuItem value={"3D"}>Draw Scramble 3D</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
};

export default Widget;
