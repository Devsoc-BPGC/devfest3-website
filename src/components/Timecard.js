import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Timecard({ events }) {
  return (
    <Box display="flex" flexDir="column" alignItems="center" gap="1rem">
      {events.map((item, index) => (
        <Box
          key={index}
          width="100%"
          padding="1rem"
          border="5px solid #6E44FF"
          bgColor={"transparent"}
          borderRadius="8px"
          textAlign="center"
        >
          <Text
            textColor="white"
            fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
            fontFamily="Sarpanch"
          >
            {item.name}
          </Text>
          <Text
            textColor="gray.400"
            fontSize={{ base: "0.8rem", md: "1rem" }}
            fontFamily="Sarpanch"
          >
            {item.time} {item.venue ? `| ${item.venue}` : ""}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default Timecard;
