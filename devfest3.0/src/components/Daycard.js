import React from 'react'
import { Box,Text } from '@chakra-ui/react'
function Daycard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="1.2rem">
        <Box textAlign="center" width="20%" display="flex" alignItems="center">  
        <Text textColor="white" transform="rotate(270deg)" fontFamily="Megrim" fontSize="3rem">Day-{props.num}</Text>
        </Box>
        <Box display="Flex" flexDir="column" height="100%" width="75%" justifyContent="space-between" alignItems="center">
            {
                props.events.map((item, index)=>{
                    return <Box margin="5px" key={index} height="4rem" width="90%" display="flex" alignItems="center"><Text fontFamily="Megrim" textColor="white" fontSize="2.5rem"><b>{item.name}</b></Text></Box>
                })
            }
        </Box>
    </Box>
  )
}

export default Daycard