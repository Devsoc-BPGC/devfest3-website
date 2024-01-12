import { Flex, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex direction={"column"} width={"100%"} p={"2%"} paddingTop={0}>
      <Text fontFamily={"Megrim"} fontSize={"6xl"} color={"white"} width={"100%"}>
        ABOUT
      </Text>
      <Flex justifyContent={"space-evenly"} width={"100%"}>
        <Flex width={"50%"} p={"5%"} paddingLeft={"0%"}>
          <Text color={"white"} fontSize={{ base: "xs", md: "sm", xl: "xl" }}>
            DevFest is the flagship technical event of Developers' Society featuring a diverse array of events — hackathon, gamejam, workshop, codegolf and guest speaker. This unites over 3000
            students from all around the country, converging both in-person at the BITS Pilani - Goa campus and through nationwide virtual participation. Devfest 3.0 is extra special as it aligns with
            the grand celebration of DevSoc's 10th anniversary. Come, be a part of this unique blend of learning and celebration!
          </Text>
        </Flex>
        <Flex width={"50%"} alignItems={"center"} p={"5%"}>
          <Text color={"white"} fontSize={{ base: "xl", md: "2xl", xl: "4xl" }}>
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
