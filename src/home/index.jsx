import { Box } from "@mui/system";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import useScramble from "../hooks/useScramble";

const Home = () => {
  const { scramble, isLoading, event, setEvent, refreshScramble } =
    useScramble();

  return (
    <>
      <Box>
        <Navbar
          scramble={scramble}
          isLoading={isLoading}
          event={event}
          setEvent={setEvent}
          refreshScramble={refreshScramble}
        />
      </Box>
      <Widget
        scramble={scramble}
        isLoading={isLoading}
        event={event}
        setEvent={setEvent}
        refreshScramble={refreshScramble}
      />
    </>
  );
};

export default Home;
