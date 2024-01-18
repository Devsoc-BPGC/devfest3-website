import React from "react";
import { Box, Text, Image, Button, ChakraProvider, useMediaQuery, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import devsoc_logo from "./devsoc_logo.png";

const NavBar = ({ eventsRef, sponsorsRef, timelineRef, aboutRef, teamRef, faqRef, prizesRef }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(min-width: 950px)");
  function onClick(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
    onClose();
  }

  return (
    <ChakraProvider>
      <Box width="100%" alignItems="center" display="flex" backgroundColor="#212121" p={"0.5%"}>
        <Text height="100%" fontSize="20px" color="white" marginRight="10px" marginLeft={"1%"}>
          Developers' Society BITS Goa
        </Text>
        <Image src={devsoc_logo} height="30px"></Image>
        {isLargerThan800 ? (
          <Box marginLeft="auto">
                        <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(timelineRef)}>
              Timeline
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(prizesRef)}>
              Prizes
            </Button>
            <Button marginLeft="10px" variant="ghost" color="white" colorScheme="whiteAlpha" onClick={() => onClick(eventsRef)}>
              Events
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
              Events
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
