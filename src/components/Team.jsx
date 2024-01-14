import { Flex, Image, Text } from "@chakra-ui/react";
import team from "./team.jpeg";

const Team = () => {
  return (
    <Flex width={"100%"} direction={"column"} alignItems={"center"} p={"2%"} paddingTop={0}>
      <Text fontFamily={"Megrim"} fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} color={"white"} width={"100%"}>
        Our Team
      </Text>
      <Image src={team} height={"90%"} />
    </Flex>
  );
};

export default Team;
