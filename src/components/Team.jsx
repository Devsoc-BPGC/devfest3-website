import { Flex, Image, Text,Box } from "@chakra-ui/react";
import team from "./team.jpeg";
import gradient from "../components/Rectanglegradient.png";


const Team = () => {
  return (
    <Flex width={"100%"} height={"100%"} flexDir={"column"} display="flex" alignItems={"center"} p={"2%"} paddingTop={0} zIndex={2}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundImage={gradient}
        backgroundSize="auto 100%"
        backgroundPosition="left center"
        backgroundRepeat="no-repeat"
        marginBottom={"2rem"}
      >
        <Text
          padding="20px"
          width="100%"
          textAlign="start"
          textColor="white"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem" }}
          fontFamily="Sarpanch"
        >
          OUR TEAM
        </Text>
      </Box>
      <Image src={team} width={"60%"} />
    </Flex>
  );
};

export default Team;
