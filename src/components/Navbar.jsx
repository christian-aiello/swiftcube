import { Card, Stack, Divider } from "@mui/material";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import Flex from "./Flex";
import Scrambler from "./Scrambler";

const Navbar = ({ scramble, isLoading, event, setEvent, refreshScramble }) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <Flex p="1rem 10%" borderBottom={`5px solid ${alt}`}>
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        fontFamily="Poppins"
        color="primary"
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        SwiftCube
      </Typography>
      <Scrambler scramble={scramble} isLoading={isLoading} event={event} setEvent={setEvent} refreshScramble={refreshScramble}/>
    </Flex>
  );
};

export default Navbar;
