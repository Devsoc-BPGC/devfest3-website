import React from 'react'
import polygon from './polygon.JPG'
import replit from './replit.JPG'
import { Box,Text,Flex } from '@chakra-ui/react'
import devfolio from './devfolio.JPG'
function Sponsorscard() {
  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
    <Text padding="30px" width="100%" textAlign="start" textColor="white" fontSize="5rem" fontFamily="Megrim">SPONSOR</Text>
    <div className='gold' style={{width:"100%"}}>
          <Text width="100%" textColor="gold" textAlign="center" fontSize="2rem" fontFamily="Roboto" >
            GOLD TIER
          </Text>
          <div className='gold-images' style={{width:"100%"}}>
            <Flex flexDir="row" justifyContent="space-around">
            <img width={"40%"} src={devfolio} alt="DEVFOLIO LOGO" />
            <img width={"40%"} src={polygon} alt="POLYGON LOGO" />
            </Flex>
          </div>
        </div>
        <div className='silver'  style={{width:"100%", margin:"30px"}}>
        <Text width="100%" textColor="silver" textAlign="center" fontSize="2rem" fontFamily="Roboto" >
            SILVER TIER
          </Text>
          <div className='silver-images' style={{width:"100%", margin:"30px"}}>
          <Flex flexDir="row" justifyContent="space-around">
            <img width={"40%"} src={replit} alt="REPLIT LOGO" />
            </Flex>
          </div>
        </div>
        </Box>
  )
}

export default Sponsorscard