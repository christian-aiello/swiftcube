import { Autocomplete, Card, Stack, Divider, TextField, CircularProgress} from "@mui/material";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Flex from "./Flex";
import useScramble from "../hooks/useScramble";
import { useState } from "react";

const Scrambler = ({ scramble, isLoading, event, setEvent, refreshScramble }) => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const handleEventChange = (event, value) => {
    setEvent(value);
  };

  const wcaEvents = [
    "3x3x3",
    "2x2x2",
    "4x4x4",
    "5x5x5",
    "6x6x6",
    "7x7x7",
    "Clock",
    "Megaminx",
    "Pyraminx",
    "Skewb",
    "Square-1",
  ];

  return (
    <Flex flex="0.95" sx={{ justifyContent: "center" }}>
      <Card variant="outlined" sx={{ width: "100%", px: "1em", margin: "0" }}>
        <Stack divider={<Divider orientation="horizontal" flexItem />}>
          <Flex sx={{ justifyContent: "center", padding: "1rem", gap: "15px" }}>
            <Autocomplete
              disablePortal
              options={wcaEvents}
              sx={{ width: 150, padding: "0" }}
              renderInput={(params) => (
                <TextField {...params} label="Event" size="small" />
              )}
              value={event}
              onChange={handleEventChange}
            />
            <Card
              sx={{
                border: "1px solid transparent",
                padding: "0.5em",
                "&:hover": {
                  cursor: "pointer",
                  border: "1px solid white",
                },
              }}
              onClick={refreshScramble}
            >
              <Flex>
                <RefreshIcon />
              </Flex>
            </Card>
          </Flex>
          <Flex
            sx={{ justifyContent: "center", padding: "1rem" }}
            fontSize="1.5em"
          >
            {isLoading ? <CircularProgress /> : scramble}
          </Flex>
        </Stack>
      </Card>
    </Flex>
  );
};

export default Scrambler;
