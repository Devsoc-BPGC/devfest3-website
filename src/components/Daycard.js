import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Daycard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="1.2rem">
      <Box textAlign="center" width="30%" display="flex" alignItems="center">
        <Text textColor="white" transform="rotate(180deg)" fontFamily="Megrim" minW={"100%"} fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }} style={{writingMode:"vertical-rl",textOrientation:"sideways-right"}} >
          Day-{props.num}
        </Text>
      </Box>
      <Box display="Flex" flexDir="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
        {props.events.map((item, index) => {
          return (
            <Box margin="5px" key={index} height={{ base: "3rem", md: "3.75rem", lg: "4.5rem", xl: "5.25rem", "2xl": "6rem" }} width="100%" display="flex" alignItems="center">
              <Text fontFamily="Megrim" textColor="white" fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }} lineHeight={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }}>
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
