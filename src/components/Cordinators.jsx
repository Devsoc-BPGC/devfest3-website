import { Wrap, WrapItem, Text, Flex, Image, useMediaQuery,Link } from "@chakra-ui/react";
import sneh from "./sneh_prakash.png";
import divyansh from "./divyansh.png";
import abheshek from "./abheshek.png";
import mahir from "./mahir.png";
import rajat from "./rajat.png";
import sanchay from "./sanchay.png";
import ronan from "./ronan.png";
import React from "react";
import devfesttextbg from "./DEVFEST.png";
function CordiCard({ img, name, position,link }) {
  return (
    <Link
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
      href={link}
    >
      <Image height={"75%"} src={img} marginTop={"10px"} p={"1%"}></Image>
      <Text color={"white"} paddingStart={"1rem"} fontSize={{ md: "1.5rem", base: "1rem" }} p={"1%"} fontFamily={"Didact Gothic"}>
        <b>{name}</b>
      </Text>
      <Text margin={"5px"} color={"#00a3ff"} paddingStart={"1rem"} fontSize={{ md: "1rem", base: "0.7rem" }} p={"1%"}>
        <b>{position}</b>
      </Text>
    </Link>
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
            <CordiCard name="Sneh Prakash" position="CHIEF COORDINATOR" img={sneh} link="https://in.linkedin.com/in/sneh-prakash-75a37a218"/>
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Divyansh Singh" position="SUB COORDINATOR" img={divyansh} link="https://in.linkedin.com/in/divyansh-singh-53623b251"/>
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Abheshek Murugan" position="HEAD OF WEB DEVELOPMENT" img={abheshek} link="https://www.linkedin.com/in/abheshek-murugan"/>
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Mahir Ghadiali" position="HEAD OF APP DEVELOPMENT" img={mahir} link="https://in.linkedin.com/in/mahirg" />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Rajat Srivastava" position="HEAD OF UI/UX" img={rajat} link="https://in.linkedin.com/in/rajat-srivastava-993037260/" />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Sanchay Sahay" position="HEAD OF GAME DEVELOPMENT" img={sanchay} link="https://in.linkedin.com/in/supersanchayrx" />
          </WrapItem>
          <WrapItem height={{ md: "21rem", base: "13rem" }} width={{ md: "20rem", base: "12rem" }}>
            <CordiCard name="Ronan Coutinho" position="HEAD OF ARTIFICIAL INTELLIGENCE" img={ronan} link="https://www.linkedin.com/in/ronan-coutinho/" />
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
}

export default Cordinators;
