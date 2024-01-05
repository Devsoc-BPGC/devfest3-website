import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Timecard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="1.2rem">
      <Box display="Flex" flexDir="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
        {props.events.map((item, index) => {
          return (
            <Box margin="5px" key={index} height={{ base: "2rem", md: "3.25rem", lg: "4rem", xl: "5rem", "2xl": "6rem" }} width="90%" display="flex" alignItems="center">
              <Text textColor="white" fontSize={{ base: "0.7rem", md: "1rem", lg: "1.5rem", xl: "2rem", "2xl": "2.5em" }}>
                {item.time} | {item.venue}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Timecard;
