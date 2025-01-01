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
    [new DevfestEvent("TBA", "TBA", "TBA")],
    [new DevfestEvent("TBA", "TBA", "TBA")],
    [new DevfestEvent("TBA", "TBA", "TBA")],
  ];

  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
      <Text flexGrow={1} padding="30px" width="100%" textAlign="start" textColor="white" fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} fontFamily="Megrim">
        TIMETABLE
      </Text>
      <Flex justifyContent="space-between" width="100%" flexDir={"column"}>
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
