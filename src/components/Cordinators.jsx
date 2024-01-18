import { Wrap, WrapItem, Text, Flex, Image, Box, useMediaQuery } from "@chakra-ui/react";
import sayanthan from "./sayantan.jpg";
import ruchik from "./ruchik.jpg";
import aryan from "./aryan.jpg";
import aditya from "./aditya.jpg";
import shubh from "./shubh.jpg";
import React from "react";
import sv from "./sv.jpg";
import devfesttextbg from "./DEVFEST.png";
function CordiCard({ img, name, position }) {
  return (
    <Box
      borderRadius={"7%"}
      height={"100%"}
      width={"100%"}
      backgroundColor={"#000000"}
      opacity={"80%"}
      borderWidth="1px"
      // borderColor="white"
      boxShadow={"3px 3px 10px white"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      p={"3%"}
    >
      <Image height={"75%"} src={img} marginTop={"10px"} p={"1%"}></Image>
      <Text color={"white"} paddingStart={"1rem"} fontSize={{ md: "1.5rem", base: "1rem" }} p={"1%"} fontFamily={"Didact Gothic"}>
        <b>{name}</b>
      </Text>
      <Text margin={"5px"} color={"#00a3ff"} paddingStart={"1rem"} fontSize={{ md: "1rem", base: "0.7rem" }} p={"1%"}>
        <b>{position}</b>
      </Text>
    </Box>
  );
}
function Cordinators() {
  const [isLargerThan1500] = useMediaQuery("(min-width: 1500px)");
  return (
    <>
      <Flex width={"100%"} direction={"column"} alignItems={"center"} p={"2%"} paddingTop={0}>
        <Text fontFamily={"Megrim"} fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} color={"white"} width={"100%"} paddingBottom={"2rem"}>
          Coordinators
        </Text>
        <Wrap spacing={"5rem"} justify={"center"} backgroundImage={isLargerThan1500 ? devfesttextbg : ""} backgroundRepeat={"no-repeat"} backgroundPosition={"center"}>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Sayantan Bera" position="CHIEF COORDINATOR" img={sayanthan} />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Ruchik Bakhai" position="SUB COORDINATOR" img={ruchik} />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Aryan Bhosale" position="HEAD OF WEB DEVELOPMENT" img={aryan} />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Aditya Kulkarni" position="HEAD OF APP DEVELOPMENT" img={aditya} />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Shubh Agarwal" position="HEAD OF UI/UX" img={shubh} />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="SV Sumanth" position="HEAD OF GAME DEVELOPMENT" img={sv} />
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}

export default Cordinators;
