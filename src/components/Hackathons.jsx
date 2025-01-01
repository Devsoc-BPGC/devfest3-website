import React from "react";
import { ChakraProvider, Flex, Text, IconButton, Link, Button } from "@chakra-ui/react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import ParticleAnimation from "./ParticleAnimation";

const Hackathons = () => {
  return (
    <ChakraProvider>
      <Flex direction="column" minH={"100vh"} bgPosition={"center"} bgColor={"black"} scrollBehavior={true} overflowX={"hidden"} justifyContent={'end'}>
        <ParticleAnimation />
        <Flex color={"white"} direction={"column"} alignItems={"center"} justifyContent={"center"} height={"60vh"}>
            <Text fontSize={"6xl"} fontFamily={"Megrim"}>HACKATHONS</Text>
            <Text>COMING SOON</Text>
        </Flex>
        <Flex width={"100%"} justifyContent={"space-evenly"} backgroundColor={"black"} zIndex={2} p={"1%"}>
          <Link href="https://www.instagram.com/devsocbitsgoa/" isExternal>
            <IconButton icon={<FaInstagramSquare style={{ height: "30px", width: "30px" }} />} height={"max-content"} minW={"unset"} />
          </Link>
          <Link href="https://www.linkedin.com/company/13598216/" isExternal>
            <IconButton icon={<FaLinkedin style={{ height: "30px", width: "30px" }} />} height={"max-content"} minW={"unset"} />
          </Link>
          <Link href="https://twitter.com/devsocbitsgoa" isExternal>
            <Button height={"max-content"} minW={"unset"} p={0} style={{ height: "30px", width: "30px" }}>
              𝕏
            </Button>
          </Link>
        </Flex>
        <Flex color={"white"} justifyContent={"space-between"} alignItems={"center"}>
          <Flex direction={"column"} p={"1%"}>
            <Text color={"lightgray"}>Email</Text>
            <Link href="mailto:devsocbpgc@gmail.com" fontWeight={700}>
              devsocbpgc@gmail.com
            </Link>
          </Flex>
          <Flex direction={"column"} p={"1%"}>
            <Text color={"lightgray"} textAlign={"right"}>
              Phone no.
            </Text>
            <Text fontWeight={700}>+91 85398 53805</Text>
            <Text fontWeight={700}>+91 84002 36921</Text>
          </Flex>
        </Flex>
        <footer style={{ color: "white", fontSize: "1rem", backgroundColor: "black", textAlign: "center" }}>
          Made with ❤️ by{" "}
          <a href="https://devsoc.club" style={{ color: "#ADD8E6" }}>
            DevSoc
          </a>
        </footer>
      </Flex>
    </ChakraProvider>
  );
};

export default Hackathons;
