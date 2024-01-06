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
  // const Day_Schedule = [[new DevfestEvent("Inaugration","11:00-1:00","Auditorium"),new DevfestEvent("Game Jam","2:00 onwards","Initation"),new DevfestEvent("Hackathon","2:00 onwards","Initation")],
  // [new DevfestEvent("Speaker Event","11:00-1:00","Auditorium"),new DevfestEvent("BitsKreig Event","2:00 onwards","Initation"),new DevfestEvent("Algo Event","2:00 onwards","Initation")],
  // [new DevfestEvent("Workshop","11:00-1:00","Auditorium"),new DevfestEvent("Hackathon Result","2:00 onwards","Completion"),new DevfestEvent("Game Jam Result","2:00 onwards","Completion")]]

  const Day_Schedule = [
    [new DevfestEvent("Hackathon Starts", "10 PM onwards", "TBD"), new DevfestEvent("GameJam Starts", "10 PM onwards", "TBD")],
    [new DevfestEvent("CodeGolf starts", "2 PM onwards", "Online"), new DevfestEvent("Guest Speaker", "7 PM - 9 PM", "TBD")],
    [
      new DevfestEvent("Workshop Starts", "10 AM - 1 PM", "TBD"),
      new DevfestEvent("Workshop Continued", "2 PM - 5 PM", "TBD"),
      new DevfestEvent("Hackathon Ends", "10 PM"),
      new DevfestEvent("GameJam Ends", "10 PM"),
    ],
  ];

  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
      <Text flexGrow={1} padding="30px" width="100%" textAlign="start" textColor="white" fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} fontFamily="Megrim">
        TIMETABLE
      </Text>
      <Flex height="80%" width="100%" justifyContent="space-between">
        <Box width="60%" height={"100%"}>
          <Daycard num={0} events={Day_Schedule[0]} />
          <Daycard num={1} events={Day_Schedule[1]} />
          <Daycard num={2} events={Day_Schedule[2]} />
        </Box>
        <Box width="1.5px" backgroundColor="white"></Box>
        <Box width="40%" height={"100%"}>
          <Timecard events={Day_Schedule[0]}></Timecard>
          <Timecard events={Day_Schedule[1]}></Timecard>
          <Timecard events={Day_Schedule[2]}></Timecard>
        </Box>
      </Flex>
    </Box>
  );
};

export default Timetable;
