import { Container, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const WinnerCard = (props) => {
  return (
    <Container
      bgColor={"rgba(256,256,256,0.15)"}
      borderRadius={"16px"}
      backdropFilter={"blur(1px)"}
      height={"80%"}
      width={{ base: "50%", sm: "25%", lg: "20%" }}
      textAlign={"center"}
      m={"1%"}
      p={"1%"}
    >
      <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} fontSize={"xl"} paddingBottom={"2%"}>
        {props.title}
      </Text>
      <Text color={"white"} textAlign={"left"}>
        <UnorderedList>
          {props.prizes.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Text>
    </Container>
  );
};

const HackathonPrizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Sarpanch"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        Hackathon Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"} fontFamily={"Sarpanch"} justifyContent={"space-around"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Winner" prizes={["Cash Prize of ₹50,000"]} />
          <WinnerCard title="First Runner Up" prizes={["Cash Prize of ₹30,000"]} />
          <WinnerCard title="Second Runner Up" prizes={["Cash Prize of ₹20,000"]} />
        </Flex>
        <Flex width={"100%"} height={"100%"} fontFamily={"Sarpanch"} justifyContent={"space-evenly"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Top 25 Team" prizes={["Free Devfest T-shirts"]} />
          <WinnerCard title="All Participants" prizes={["Free Devfolio T-shirts"]} />
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

const GameJamPrizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Sarpanch"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        GameJam Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"}fontFamily={"Sarpanch"} justifyContent={"space-around"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Winner" prizes={["TBA"]} />
          <WinnerCard title="First Runner Up" prizes={["TBA"]} />
          <WinnerCard title="Second Runner Up" prizes={["TBA"]} />
        </Flex>
        <Flex width={"100%"} height={"100%"}fontFamily={"Sarpanch"} justifyContent={"space-evenly"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Top 25 Team" prizes={["TBA"]} />
          <WinnerCard title="All Participants" prizes={["TBA"]} />
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

const Prizes = () => {
  return (
    <>
      <HackathonPrizes />
      <GameJamPrizes />
    </>
  );
};

export default Prizes;
