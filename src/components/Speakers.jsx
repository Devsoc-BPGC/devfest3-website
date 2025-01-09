import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import speaker1 from "./Kunal Kushwaha.png";
const Speakers = () => {
  return (
    <>
      <Flex position={"absolute"} left={"0"} paddingLeft={"10%"} width={"40%"}>
        <Image src={speaker1} />
      </Flex>
      <Box height={"30%"} width={"60%"} borderRadius={"16px"} backgroundColor={"rgba(255,255,255, 0.2)"} marginRight={"10%"} marginTop={"20%"} p={"1%"} color={"white"}>
        <Text textAlign={"center"} width={"100%"} fontSize={"3xl"} fontFamily={"Sarpanch"} fontWeight={800}>
          Kunal Kushwaha
        </Text>
        <br></br>
        <Text fontFamily={"Didact Gothic"} fontSize={"xl"}>
          About
        </Text>
        <Text fontFamily={"Didact Gothic"} fontSize={"lg"}>
          Kunal is the founder of WeMakeDevs and also started the official Cloud Native Student Community group joined by thousands of folks, focussed on getting more young people involved in the
          ecosystem.
        </Text>
        <br></br>
        <Text fontFamily={"Didact Gothic"} fontSize={"xl"}>
          Job Title
        </Text>
        <Text fontFamily={"Didact Gothic"} fontSize={"lg"}>
          Youtuber and Open Source Software Developer
        </Text>
        <br></br>
        <Text fontFamily={"Didact Gothic"} fontSize={"xl"}>
          Company/Organization
        </Text>
        <Text fontFamily={"Didact Gothic"} fontSize={"lg"}>
          civo
        </Text>
        <br></br>
        <Link href="https://www.linkedin.com/in/kunal-kushwaha/?originalSubdomain=uk" isExternal fontSize={"xl"} fontFamily={"Didact Gothic"}>
          Profile <ExternalLinkIcon mx="2px" />
        </Link>
        <br></br>
        <Link href="https://twitter.com/kunalstwt?refsrc=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" isExternal fontSize={"xl"} fontFamily={"Didact Gothic"}>
          Twitter <ExternalLinkIcon mx="2px" />
        </Link>
        <br></br>
        <Link href="https://www.linkedin.com/in/kunal-kushwaha" isExternal fontSize={"xl"} fontFamily={"Didact Gothic"}>
          LinkedIn <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </>
  );
};

export default Speakers;
