import React from 'react'
import { Box,Text } from '@chakra-ui/react'
function Timecard(props) {
  return (
    <Box display="flex" flexDir="row" width="100%" marginBottom="1.2rem">
        <Box display="Flex" flexDir="column" height="100%" width="75%" justifyContent="space-between" alignItems="center">
            {
                props.events.map((item, index)=>{
                    return <Box margin="5px" key={index} height="4rem" width="90%" display="flex" alignItems="center"><Text textColor="white" fontSize="1.5rem">{item.time} | {item.venue}</Text></Box>
                })
            }
        </Box>
    </Box>
  )
}

export default Timecard