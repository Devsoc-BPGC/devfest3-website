import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import Daycard from "./Daycard";
import Timecard from "./Timecard";
const Timetable = () => {
  function DevfestEvent(name, time, venue) {
    this.name = name;
    this.time = time;
    this.venue = venue;
  }

  // const Day_Schedule = [
  //   [new DevfestEvent("Hackathon Starts", "11 PM onwards", "TBD"), new DevfestEvent("GameJam Starts", "11 PM onwards", "TBD")],
  //   [new DevfestEvent("CodeGolf starts", "2 PM onwards", "Online"), new DevfestEvent("Guest Speaker", "7 PM - 9 PM", "TBD")],
  //   [
  //     new DevfestEvent("Workshop Starts", "10 AM - 1 PM", "TBD"),
  //     new DevfestEvent("Workshop Continued", "2 PM - 5 PM", "TBD"),
  //     new DevfestEvent("Hackathon Ends", "11 PM"),
  //     new DevfestEvent("GameJam Ends", "11 PM"),
  //   ],
  // ];

  const Day_Schedule = [
    [
      new DevfestEvent("Kickoff", "6 PM"),
      new DevfestEvent("Formidium Speaker Session", "6 PM"),
      new DevfestEvent("Formidium Hackathon Starts", "9 PM onwards"),
      new DevfestEvent("GameJam Starts", "9 PM onwards")
    ],
    [
      new DevfestEvent("Workshop Part 1: WebDev", "10 AM - 1 PM"),
      new DevfestEvent("Workshop Part 2: WebDev", "2 PM - 4 PM"),
      new DevfestEvent("XBox Speaker Session", "5 PM"),
      new DevfestEvent("GSoC Session with Ronan", "8 PM")
    ],
    [
      new DevfestEvent("Workshop Part 1: GameDev", "10 AM - 1 PM"),
      new DevfestEvent("Workshop Part 2: GameDev", "2 PM - 4 PM"),
      new DevfestEvent("DUALITE Session (Online)", "5 PM"),
      new DevfestEvent("Formidium Speaker Session", "7:30 PM"),
      new DevfestEvent("Game Jam and Hackathon Prize Distribution", "9 PM")
    ],
  ];

  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center" >
      <Text flexGrow={1} padding="30px" width="100%" textAlign="start" textColor="white" fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} fontFamily={"ROGFont"}>
        TIMETABLE
      </Text>
      <Flex justifyContent="space-between" width="100%" flexDir={"column"} >
        <Flex width={"100%"} justifyContent="space-evenly">
          <Daycard num={0} events={Day_Schedule[0]} />
          <Timecard events={Day_Schedule[0]}></Timecard>
        </Flex>
        <Flex width={"100%"} justifyContent="space-evenly">
          <Daycard num={1} events={Day_Schedule[1]} />
          <Timecard events={Day_Schedule[1]}></Timecard>
        </Flex>
        <Flex width={"100%"} justifyContent="space-evenly">
          <Daycard num={2} events={Day_Schedule[2]} />
          <Timecard events={Day_Schedule[2]}></Timecard>
        </Flex>
        <Box width="1.5px" backgroundColor="white"></Box>
      </Flex>
    </Box>
  );
};

export default Timetable;
