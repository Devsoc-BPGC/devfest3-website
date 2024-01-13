import { Flex, Image, Text } from "@chakra-ui/react";
import team from "./team.jpeg";

const Team = () => {
  return (
    <Flex width={"100%"} direction={"column"} alignItems={"center"} p={"2%"} paddingTop={0}>
      <Text fontFamily={"Megrim"} fontSize={"6xl"} color={"white"} width={"100%"}>
        Our Team
      </Text>
      <Image src={team} height={"90%"} />
    </Flex>
  );
};

export default Team;
