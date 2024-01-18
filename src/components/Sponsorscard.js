import React from "react";
import polygon from "./polygon.png";
import replit from "./replit.png";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import devfolio from "./devfolio.png";
import outscal from "./outscal_logo.jpg";
import interviewbuddy from "./interviewbuddy.png";
import echo3D from "./echo3d2.png";
import archegos from "./archegos.jpeg";
import pizzahut from "./pizzahut.png";
import igdc from "./igdc.png";
import fablabs from "./fablabs.jpg";

const Sponsorscard = () => {
  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
      <Text padding="30px" width="100%" textAlign="start" textColor="white" fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} fontFamily="Megrim">
        SPONSOR
      </Text>
      <div className="gold" style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="gold" textAlign="center" fontSize="2rem" fontFamily="Megrim">
          <b>GOLD TIER</b>
        </Text>
        <div className="gold-images" style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="space-evenly" spacing="10px">
            <WrapItem margin="10px">
              <img src={devfolio} alt="DEVFOLIO LOGO" />
            </WrapItem>
            <WrapItem margin="10px">
              <img src={polygon} alt="POLYGON LOGO" />
            </WrapItem>
            <WrapItem margin="10px">
              <img src={outscal} alt="OUTSCAL LOGO" />
            </WrapItem>
            <WrapItem margin="10px" maxW={"20%"}>
              <img src={igdc} alt="IGDC LOGO" />
            </WrapItem>
          </Wrap>
        </div>
      </div>
      <div className="silver" style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="silver" textAlign="center" fontSize="2rem" fontFamily="Megrim">
          <b>SILVER TIER</b>
        </Text>
        <div className="silver-images" style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="space-evenly" spacing="30px">
            <WrapItem width={{ base: "50%", md: "25%", xl: "20%" }} margin="10px">
              <img src={replit} alt="REPLIT LOGO" />
            </WrapItem>
            <WrapItem width={{ base: "50%", md: "25%", xl: "15%" }} margin="10px">
              <img src={archegos} alt="ARCHEGOS LOGO" />
            </WrapItem>
            <WrapItem margin="10px" width={{ base: "100%", sm: "50%", md: "25%" }} paddingLeft={{ base: "10%", sm: "0" }} paddingRight={{ base: "10%", sm: "0" }} alignItems={"center"}>
              <img src={echo3D} alt="ECHO3D LOGO" />
            </WrapItem>
          </Wrap>
        </div>
      </div>
      <div className="bronze" style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="#874c12" textAlign="center" fontSize="2rem" fontFamily="Megrim">
          <b>BRONZE TIER</b>
        </Text>
        <div className="bronze-images" style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="center" spacing="30px">
            <WrapItem margin="10px" width={{ base: "100%", sm: "50%", md: "20%" }} paddingLeft={{ base: "10%", sm: "0" }} paddingRight={{ base: "10%", sm: "0" }}>
              <img src={interviewbuddy} alt="INTERVIEWBUDDY LOGO" />
            </WrapItem>
            ``
          </Wrap>
        </div>
      </div>
      <div className="food" style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="white" textAlign="center" fontSize="2rem" fontFamily="Megrim">
          <b>FOOD PARTNER</b>
        </Text>
        <div className="food-images" style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="center" spacing="30px">
            <WrapItem margin="10px" width={{ base: "100%", sm: "50%", md: "20%" }} paddingLeft={{ base: "10%", sm: "0" }} paddingRight={{ base: "10%", sm: "0" }}>
              <img src={pizzahut} alt="PIZZAHUT LOGO" />
            </WrapItem>
            ``
          </Wrap>
        </div>
      </div>
      <div className="merch" style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="white" textAlign="center" fontSize="2rem" fontFamily="Megrim">
          <b>MERCHANDISE PARTNER</b>
        </Text>
        <div className="merch-images" style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="center" spacing="30px">
            <WrapItem margin="10px" width={{ base: "100%", sm: "50%", md: "20%" }} paddingLeft={{ base: "10%", sm: "0" }} paddingRight={{ base: "10%", sm: "0" }}>
              <img src={fablabs} alt="FABLABS LOGO" />
            </WrapItem>
          </Wrap>
        </div>
      </div>
    </Box>
  );
};

export default Sponsorscard;
