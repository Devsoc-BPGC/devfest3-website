import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import gradient from "./Rectanglegradient.png";
import Daycard from "./Daycard";
import Timecard from "./Timecard";
const Timetable = () => {
  function DevfestEvent(name, time, venue) {
    this.name = name;
    this.time = time;
    this.venue = venue;
  }

  const Day_Schedule = [
    [
      new DevfestEvent("Kickoff", "6 PM"),
      new DevfestEvent("Formidium Speaker Session", "6 PM"),
      new DevfestEvent("Formidium Hackathon Starts", "9 PM onwards"),
      new DevfestEvent("GameJam Starts", "9 PM onwards"),
    ],
    [
      new DevfestEvent("Workshop Part 1: WebDev", "10 AM - 1 PM"),
      new DevfestEvent("Workshop Part 2: WebDev", "2 PM - 4 PM"),
      new DevfestEvent("XBox Speaker Session", "5 PM"),
      new DevfestEvent("GSoC Session with Ronan", "8 PM"),
    ],
    [
      new DevfestEvent("Workshop Part 1: GameDev", "10 AM - 1 PM"),
      new DevfestEvent("Workshop Part 2: GameDev", "2 PM - 4 PM"),
      new DevfestEvent("DUALITE Session (Online)", "5 PM"),
      new DevfestEvent("Formidium Speaker Session", "7:30 PM"),
      new DevfestEvent("Game Jam and Hackathon Prize Distribution", "9 PM"),
    ],
  ];
  const Dates = ["17/01/2025", "18/01/2025", "19/01/2025"];

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      padding="2rem"
      backgroundColor="transparent"
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundImage={gradient}
        backgroundSize="auto 100%"
        backgroundPosition="left center"
        marginBottom={"2rem"}
        backgroundRepeat="no-repeat"
      >
        <Text
          padding="20px"
          width="100%"
          textAlign="start"
          textColor="white"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem" }}
          fontFamily="Sarpanch"
        >
          TIMETABLE
        </Text>
      </Box>

      <Flex justifyContent="space-between" width="100%" flexWrap="wrap">
        {Day_Schedule.map((events, dayIndex) => (
          <Box
            key={dayIndex}
            width={{ base: "90%", md: "30%" }}
            padding="1rem"
            border="1px solid #6E44FF"
            borderRadius="8px"
            textAlign="center"
            backgroundColor="rgba(255, 255, 255, 0.05)"
          >
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              textColor="white"
              marginBottom="0.5rem"
              fontFamily="Sarpanch"
            >
              DAY {dayIndex + 1}
            </Text>

            <Text
              fontSize="1rem"
              fontWeight="normal"
              textColor="gray.300"
              marginBottom="1rem"
              fontFamily="Sarpanch"
            >
              {Dates[dayIndex]}
            </Text>

            {/* Events */}
            <Timecard events={events} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Timetable;