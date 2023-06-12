import Flex from "./Flex";
import { Typography } from "@mui/material";

const Timer = () => {
  return (
    <Flex sx={{ flex: 1 }}>
      <Typography fontSize={"7rem"} fontFamily={"Kanit"}>0.00</Typography>
    </Flex>
  );
};

export default Timer;
