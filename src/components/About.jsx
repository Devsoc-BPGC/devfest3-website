import { Flex, Text,Box } from "@chakra-ui/react";
import gradient from "../components/Rectanglegradient.png";


const About = () => {
  return (
    <Flex direction={"column"} width={"100%"} p={"2%"} paddingTop={0}>
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
          ABOUT 
        </Text>
      </Box>
      <Flex justifyContent={"space-evenly"} width={"100%"}>
        <Flex width={"50%"} p={"5%"} paddingLeft={"0%"}>
          <Text color={"white"} fontFamily={"Sarpanch"} fontSize={{ base: "xs", md: "sm", xl: "xl" }}>
            DevFest is the flagship technical event of Developers' Society featuring a diverse array of events — hackathon, gamejam, workshop, codegolf and guest speaker. This unites over 3000
            students from all around the country, converging both in-person at the BITS Pilani - Goa campus and through nationwide virtual participation. Come, be a part of this unique blend of learning and celebration!
          </Text>
        </Flex>
        <Flex width={"50%"} alignItems={"center"} p={"5%"} paddingLeft={"15%"}>
          <Text color={"white"} fontSize={{ base: "xl", md: "2xl", xl: "4xl" }} fontFamily={"Sarpanch"}>
            2000+ Participants
            <br />
            Workshops
            <br />
            Prizes
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
