import React from 'react'
import {Box,Text,Image,Button,ChakraProvider} from '@chakra-ui/react';
import devsoc_logo from './devsoc_logo.png'
function NavBar() {
  return (
    <ChakraProvider><Box width="100%" height="32px" margin="0" alignItems="center" display="flex" backgroundColor="#212121">
        <Text height="100%" fontSize="20px" color="white" marginRight="10px">Developer’s Society BITS Goa</Text>
        <Image src={devsoc_logo} height="30px"></Image>
        <Box marginLeft="auto">
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>About</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Merchandise</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Events</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Sponsors</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>Team</Button>
            <Button marginLeft="10px" variant='ghost' color="white" colorScheme='whiteAlpha'>DevSoc</Button>
        </Box>
        </Box></ChakraProvider>
  )
}

export default NavBar