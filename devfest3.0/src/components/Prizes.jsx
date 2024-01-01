import { Container, Flex, Text } from "@chakra-ui/react";

const Prizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Megrim"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-around"}>
          <Container bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} height={"80%"} width={"15%"} textAlign={"center"}>
            <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
              Winner
            </Text>
          </Container>
          <Container bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} height={"80%"} width={"15%"} textAlign={"center"}>
            <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
              First Runner Up
            </Text>
          </Container>
          <Container bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} height={"80%"} width={"15%"} textAlign={"center"}>
            <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
              Second Runner Up
            </Text>
          </Container>
        </Flex>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-evenly"}>
          <Container bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} height={"80%"} width={"15%"} textAlign={"center"}>
            <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
              Top 25 Team
            </Text>
          </Container>
          <Container bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} height={"80%"} width={"15%"} textAlign={"center"}>
            <Text fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
              All Participants
            </Text>
          </Container>
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default Prizes;
