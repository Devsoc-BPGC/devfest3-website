import React from "react";
import { Box, Text, Image, Button, ChakraProvider, useMediaQuery, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import devsoc_logo from "./devsoc_logo.png";
import devsoc_logo2 from "./devsoclogo2.png";

const NavBar = ({ eventsRef, sponsorsRef, timelineRef, aboutRef, teamRef, faqRef, prizesRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(min-width: 950px)");
  function onClick(ref) {
    ref.current ? ref.current.scrollIntoView({ behavior: "smooth" }) : window.open("/", "_self");
    onClose();
  }

  return (
    <ChakraProvider >
      <Box width="100%" alignItems="center" display="flex" backgroundColor="rgba(0, 0, 28, 0.8)"  backdropFilter={"blur(10px)"}  bac p={"0.2%"} fontFamily={"sarpanch"} >
        <Image src={devsoc_logo2} height="60px" p={"0.5%"}></Image>
        {isLargerThan800 ? (
          <Box marginLeft="auto">
                        <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(timelineRef)}>
              Timeline
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(prizesRef)}>
              Prizes
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => window.open("/hackathons", "_self")}>
              Hackathons
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(sponsorsRef)}>
              Sponsors
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(aboutRef)}>
              About
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(teamRef)}>
              Team
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(faqRef)}>
              FAQs
            </Button>
          </Box>
        ) : (
          <Box marginLeft="auto">
            <Button as={Button} width={"1rem"} color={"white"} rightIcon={<HamburgerIcon />} backgroundColor={"transparent"} onClick={onOpen}></Button>
            <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody backgroundColor={"black"}>
                  <DrawerCloseButton color={"white"} />
                  <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(timelineRef)}>
              Timeline
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(prizesRef)}>
              Prizes
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(eventsRef)}>
              Hackathons
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(sponsorsRef)}>
              Sponsors
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(aboutRef)}>
              About
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(teamRef)}>
              Team
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(faqRef)}>
              FAQs
            </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
