import React from 'react'
import {Box,Text,Image,Button,ChakraProvider,useMediaQuery,useDisclosure,Drawer,DrawerOverlay,DrawerContent,DrawerBody,DrawerCloseButton} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons'
import devsoc_logo from './devsoc_logo.png'
function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan800] = useMediaQuery('(min-width: 950px)');
  return (
    <ChakraProvider><Box width="100%" height="32px" margin="0" alignItems="center" display="flex" backgroundColor="#212121">
        <Text height="100%" fontSize="20px" color="white" marginRight="10px">Developer’s Society BITS Goa</Text>
        <Image src={devsoc_logo} height="30px"></Image>
        { isLargerThan800 ?
        <Box marginLeft="auto">
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>About</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Merchandise</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Events</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Sponsors</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Team</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>DevSoc</Button>
        </Box> : <Box marginLeft="auto">
  <Button as={Button} width={"1rem"} color={"white"} rightIcon={<HamburgerIcon />} backgroundColor={"transparent"} onClick={onOpen}>
  </Button>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
      <DrawerBody backgroundColor={"black"}>
      <DrawerCloseButton color={"white"}/>
    <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>About</Button>
    <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Merchandise</Button>
    <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Events</Button>
    <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Sponsors</Button>
    <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Team</Button>
   <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>DevSoc</Button>
    </DrawerBody>
    </DrawerContent>
  </Drawer>
           </Box>
        }
        </Box></ChakraProvider>
  )
}

export default NavBar