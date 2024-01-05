import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Daycard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="1.2rem">
      <Box textAlign="center" width="30%" display="flex" alignItems="center">
        <Text textColor="white" transform="rotate(270deg)" fontFamily="Megrim" width={"100%"} fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }}>
          Day-{props.num}
        </Text>
      </Box>
      <Box display="Flex" flexDir="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
        {props.events.map((item, index) => {
          return (
            <Box margin="5px" key={index} height={{ base: "2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem", "2xl": "4rem" }} width="90%" display="flex" alignItems="center">
              <Text fontFamily="Megrim" textColor="white" fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3em" }}>
                <b>{item.name}</b>
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Daycard;
