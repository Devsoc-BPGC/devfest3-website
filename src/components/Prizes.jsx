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

const GameJamPrizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Megrim"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        GameJam Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-around"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard
            title="Winner"
            prizes={[
              "Cash Prize",
              "Free passes for the IGDC Flagship event later this year",
              "1-month FREE access to Pro tier of echo3D (worth $99)",
              "Free access to courses worth Rs. 1000 from Outscal",
              "Certificate of Excellence",
            ]}
          />
          <WinnerCard
            title="First Runner Up"
            prizes={[
              "Cash Prize",
              "Free passes for the IGDC Flagship event later this year",
              "1-month FREE access to Pro tier of echo3D (worth $99)",
              "Free access to courses worth Rs. 1000 from Outscal",
              "Certificate of Excellence",
            ]}
          />
          <WinnerCard
            title="Second Runner Up"
            prizes={[
              "Cash Prize",
              "Free passes for the IGDC Flagship event later this year",
              "1-month FREE access to Pro tier of echo3D (worth $99)",
              "Free access to courses worth Rs. 1000 from Outscal",
              "Certificate of Excellence",
            ]}
          />
        </Flex>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Top 25 Team" prizes={["1-month FREE access to Pro tier of echo3D (worth $99)", "Free access to courses worth Rs. 1000 from Outscal", "Certificate of Appreciation"]} />
          <WinnerCard
            title="All Participants"
            prizes={["1-month FREE access to Pro tier of echo3D (worth $99)", "Free access to courses worth Rs. 1000 from Outscal", "Certificate of Participation"]}
          />
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

const HackathonPrizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Megrim"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        Hackathon Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-around"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard
            title="Winner"
            prizes={["Cash Prize", "1-month FREE access to Pro tier of echo3D (worth $99)", "100% off voucher worth Rs. 1100 from Interview Buddy", "Certificate of Excellence"]}
          />
          <WinnerCard
            title="First Runner Up"
            prizes={["Cash Prize", "1-month FREE access to Pro tier of echo3D (worth $99)", "100% off voucher worth Rs. 1100 from Interview Buddy", "Certificate of Excellence"]}
          />
          <WinnerCard
            title="Second Runner Up"
            prizes={["Cash Prize", "1-month FREE access to Pro tier of echo3D (worth $99)", "100% off voucher worth Rs. 1100 from Interview Buddy", "Certificate of Excellence"]}
          />
        </Flex>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Top 25 Team" prizes={["1-month FREE access to Pro tier of echo3D (worth $99)", "90% off voucher from Interview Buddy", "Certificate of Appreciation"]} />
          <WinnerCard title="All Participants" prizes={["1-month FREE access to Pro tier of echo3D (worth $99)", "90% off voucher from Interview Buddy", "Certificate of Participation"]} />
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
