import React from 'react'
import polygon from './polygon.png'
import replit from './replit.png'
import { Box,Text,Wrap,WrapItem } from '@chakra-ui/react'
import devfolio from './devfolio.png'
import outscal from './outscal_logo.jpg'
import interviewbuddy from './interviewbuddy.png';
import echo3D from './echo3d2.png';

const Sponsorscard = () => {
  return (
    <Box height="100%" width="100%" display="flex" flexDir="column" alignItems="center">
    <Text padding="30px" width="100%" textAlign="start" textColor="white" fontSize={{ base: "3rem",md:"3.5rem",lg:"4rem",xl:"4.5rem","2xl": "5em"}} fontFamily="Megrim">SPONSOR</Text>
    <div className='gold' style={{width:"100%"}}>
          <Text width="100%" textColor="gold" textAlign="center" fontSize="2rem" fontFamily="Megrim" >
            <b>
            GOLD TIER
            </b>
          </Text>
          <div className='gold-images' style={{width:"100%"}}>
            <Wrap justify='space-evenly' spacing='10px'>
                <WrapItem margin="10px">
            <img src={devfolio} alt="DEVFOLIO LOGO" />
            </WrapItem>
            <WrapItem margin="10px">
            <img src={polygon} alt="POLYGON LOGO" />
            </WrapItem>
            <WrapItem margin="10px">
            <img src={outscal} alt="OUTSCAL LOGO" />
            </WrapItem>
            </Wrap>
            <Wrap justify={'space-evenly'}>
            <WrapItem margin="10px" width={'25%'}>
            <img src={interviewbuddy} alt="INTERVIEWBUDDY LOGO"/>
            </WrapItem>
            <WrapItem margin="10px" width={'25%'} alignItems={'center'}>
            <img src={echo3D} alt="ECHO3D LOGO"/>
            </WrapItem>
            </Wrap>
          </div>
        </div>
        <div className='silver'  style={{width:"100%"}}>
        <Text width="100%" textColor="silver" textAlign="center" fontSize="2rem" fontFamily="Megrim" >
            <b>
            SILVER TIER
            </b>
          </Text>
          <div className='silver-images' style={{width:"100%"}}>
          <Wrap justify='center' spacing='30px'>
                <WrapItem width={{base:"50%",md:"25%",xl:"20%"}} margin="10px">
            <img src={replit} alt="REPLIT LOGO" />
            </WrapItem>
            </Wrap>
          </div>
        </div>
        </Box>
  )
}

export default Sponsorscard