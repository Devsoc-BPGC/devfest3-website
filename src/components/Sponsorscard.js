import React from "react";
// import polygon from "./polygon.png";
// import replit from "./replit.png";
// import devfolio from "./devfolio.png";
// import outscal from "./outscal_logo.jpg";
// import interviewbuddy from "./interviewbuddy.png";
// import echo3D from "./echo3d2.png";
// import archegos from "./archegos.jpeg";
// import pizzahut from "./pizzahut.png";
// import igdc from "./igdc.png";
// import fablabs from "./fablabs.jpg";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import devfolio from "../components/devfolio.png";
import polygon from "../components/polygon.png";
import ethindia from "../components/ethindia.png";
import xbox from "../components/xbox2.png";
import dualite from "../components/dualite.png";
import formidium from "../components/formidium.png";

const Sponsorscard = () => {
  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
      <Text padding="30px" width="100%" textAlign="start" textColor="white" fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} fontFamily={"Sarpanch"}>
        SPONSORS
      </Text>
      <div style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textAlign="center" fontSize={'6xl'} fontFamily="Megrim">
          <b>TITLE SPONSOR</b>
        </Text>
        <div style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="space-evenly" spacing="10px">
            <WrapItem margin="10px" w={{ base: "100%", sm: "50%", md: "60%" }}>
              <img src={formidium} alt="FORMIDIUM LOGO" width={'100%'}/>
            </WrapItem>
          </Wrap>
        </div>
      </div>
      <div style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="gold" textAlign="center" fontSize={'4xl'} fontFamily="Megrim">
          <b>GOLD TIER</b>
        </Text>
        <div style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="space-evenly" spacing="10px" align={'center'}>
            <WrapItem margin="10px" w={{ base: "100%", sm: "50%", md: "30%" }}>
              <img src={devfolio} alt="DEVFOLIO LOGO" />
            </WrapItem>
            <WrapItem margin="10px" w={{ base: "100%", sm: "50%", md: "30%" }}>
              <img src={xbox} alt="XBOX LOGO" />
            </WrapItem>
          </Wrap>
        </div>
      </div>
      <div className="silver" style={{ width: "100%", padding: "2%" }}>
        <Text width="100%" textColor="silver" textAlign="center" fontSize="3xl" fontFamily="Megrim">
          <b>SILVER TIER</b>
        </Text>
        <div className="silver-images" style={{ width: "100%", padding: "1%" }}>
          <Wrap justify="space-evenly" spacing="30px" align={'center'}>
            <WrapItem w={{ base: "100%", sm: "50%", md: "25%"}} margin="10px">
              <img src={polygon} alt="POLYGON LOGO" width={'100%'} />
            </WrapItem>
            <WrapItem w={{ base: "100%", sm: "50%", md: "25%"}} margin="10px">
              <img src={ethindia} alt="ETHINDIA LOGO" width={'100%'}/>
            </WrapItem>
            <WrapItem w={{ base: "100%", sm: "50%", md: "25%"}} margin="10px">
              <img src={dualite} alt="DUALITE LOGO" width={'100%'}/>
            </WrapItem>
          </Wrap>
        </div>
      </div>
    </Box>
  );
};

export default Sponsorscard;
