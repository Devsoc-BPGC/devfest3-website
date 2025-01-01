import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Daycard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="5rem">
      <Box textAlign="center" width="50%" display="flex" alignItems="center" paddingLeft={"5%"}>
        <Text
          textColor="white"
          transform="rotate(180deg)"
          fontFamily="Megrim"
          minW={"100%"}
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem", xl: "3rem", "2xl": "3.5rem" }}
          style={{ writingMode: "vertical-rl", textOrientation: "sideways-right" }}
        >
          Day-{props.num+1}
          <br></br>
          {`${17 + props.num}.01.2025`}
        </Text>
      </Box>
      <Box display="Flex" flexDir="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
        {props.events.map((item, index) => {
          return (
            <Box margin="5px" key={index} height={{ base: "2rem", md: "3.25rem", lg: "4rem", xl: "5rem", "2xl": "6rem" }} width="100%" display="flex" alignItems="center">
              <Text
                fontFamily="Megrim"
                textColor="white"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }}
                lineHeight={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }}
              >
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
