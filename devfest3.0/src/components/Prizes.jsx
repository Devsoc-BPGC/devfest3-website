import { Container, Flex, Text } from "@chakra-ui/react";

const WinnerCard = (props) => {
  return (
    <Container bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} height={"80%"} width={{ base: "50%", sm: "25%", lg: "15%" }} textAlign={"center"} m={"1%"}>
      <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
        {props.title}
      </Text>
    </Container>
  );
};

const Prizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Megrim"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-around"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Winner" />
          <WinnerCard title="First Runner Up" />
          <WinnerCard title="Second Runner Up" />
        </Flex>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Top 25 Team" />
          <WinnerCard title="All Participants" />
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default Prizes;
