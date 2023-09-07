import Navbar from "../components/Navbar";
import useScramble from "../hooks/useScramble";
import Flex from "../components/Flex";
import Timer from "../components/Timer";
import { Card } from "@mui/material";
import { useState } from "react";
import useTimer from "../hooks/useTimer";

const Home = () => {
  const { scramble, isLoading, event, setEvent, refreshScramble } =
    useScramble();

  const { isTiming, setIsTiming, toggleIsTiming } = useTimer();

  return (
    <>
      {!isTiming ? (
        <Flex
          sx={{
            zIndex: "2",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          height={"100%"}
        >
          <Navbar
            scramble={scramble}
            isLoading={isLoading}
            event={event}
            setEvent={setEvent}
            refreshScramble={refreshScramble}
          />
          <Flex
            sx={{ flexGrow: "1", flexDirection: "row" }}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Card
              variant="outlined"
              sx={{
                margin: "1em",
                padding: "1em",
                alignSelf: "stretch",
                width: "400px",
              }}
            ></Card>
          </Flex>
        </Flex>
      ) : null}
      <Flex height={"100%"} flexDirection={"column"}>
        <Timer isTiming={isTiming} toggleIsTiming={toggleIsTiming} setIsTiming={setIsTiming} refreshScramble={refreshScramble}/>
      </Flex>
    </>
  );
};

export default Home;
