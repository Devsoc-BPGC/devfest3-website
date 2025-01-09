import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Timecard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="5rem" paddingLeft={"3%"} height={"100%"}>
      <Box display="flex" flexDir="column" height="100%" width="100%" justifyContent="space-between" alignItems="center">
        {props.events.map((item, index) => {
          return (
            <Box margin="5px" key={index} height={{ base: "2rem", md: "3.25rem", lg: "4rem", xl: "5rem", "2xl": "6rem" }} width="80%" display="flex" alignItems="center" fontFamily={"Sarpanch"}>
              <Text
                fontFamily={"Sarpanch"}
                textColor="white"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }}
                lineHeight={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "2.5rem", "2xl": "3rem" }}
              >
                {item.time} {item.venue ? `| ${item.venue}` : ""}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Timecard;
