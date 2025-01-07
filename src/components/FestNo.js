import React from 'react'
import fest3 from '../components/3.0Grp.png'
import { Box } from '@chakra-ui/react'
function FestNo() {
  return (
    <>
    <Box height={{base: "80%", md: "60%"}} width={{base: "80%", md: "60%"}} backgroundSize={"contain"} backgroundRepeat={"no-repeat"} backgroundImage={fest3} bgPos={"center"}>
    </Box>
    </>
  )
}

export default FestNo