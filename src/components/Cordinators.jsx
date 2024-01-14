import { Wrap,WrapItem,Text,Flex,Image,Box, useMediaQuery } from '@chakra-ui/react'
import sayanthan from './sayantan.jpg'
import ruchik from './ruchik.jpg'
import aryan from './aryan.jpg'
import aditya from './aditya.jpg'
import shubh from './shubh.jpg'
import React from 'react'
import sv from './sv.jpg'
import devfesttextbg from './DEVFEST.png'
function CordiCard({img,name,position}){
    return (
    <Box borderRadius={"0% 0% 15% 15%"} height={"100%"} width={"100%"} backgroundColor={"#D9D9D9"} opacity={"80%"} borderWidth="4px" borderColor="white" display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Image height={"75%"} width={"80%"} src={img} marginTop={"10px"}></Image>
        <Text color={"black"} paddingStart={"1rem"} fontSize={"1.5rem"}><b>{name}</b></Text>
        <Text margin={"5px"} color={"#57bbb5"} paddingStart={"1rem"} fontSize={"1rem"}><b>{position}</b></Text>
      </Box>
    )
}
function Cordinators() {
    const [isLargerThan1500] = useMediaQuery('(min-width: 1500px)')
  return (
    <>
       <Flex width={"100%"} direction={"column"} alignItems={"center"} p={"2%"} paddingTop={0}>
      <Text fontFamily={"Megrim"} fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} color={"white"} width={"100%"} paddingBottom={"2rem"}>
            Coordinators
      </Text>
      <Wrap spacing={"5rem"} justify={"center"} backgroundImage={isLargerThan1500 ? devfesttextbg : "" } backgroundRepeat={"no-repeat"} backgroundPosition={"center"} >
        <WrapItem height={{md:"25rem",base:"20rem"}} width={{md:"25rem",base:"20rem"}}>
        <CordiCard name="Sayantan Bera" position="CHIEF COORDINATOR" img={sayanthan}/>
        </WrapItem>
        <WrapItem height={{md:"25rem",base:"20rem"}} width={{md:"25rem",base:"20rem"}}>
        <CordiCard name="Ruchik Bakhai" position="SUB CORDINATOR" img={ruchik}/>
        </WrapItem >
        <WrapItem height={{md:"25rem",base:"20rem"}} width={{md:"25rem",base:"20rem"}}>
        <CordiCard name="Aryan Bhosale" position="HEAD OF WEB DEVELOPMENT" img={aryan}/>
        </WrapItem>
        <WrapItem height={{md:"25rem",base:"20rem"}} width={{md:"25rem",base:"20rem"}}>
        <CordiCard name="Aditya Kulkarni" position="HEAD OF APP DEVELOPMENT" img={aditya}/>
        </WrapItem>
        <WrapItem height={{md:"25rem",base:"20rem"}} width={{md:"25rem",base:"20rem"}}>
        <CordiCard name="Shubh Agarwal" position="HEAD OF UI/UX" img={shubh}/>
        </WrapItem>
        <WrapItem height={{md:"25rem",base:"20rem"}} width={{md:"25rem",base:"20rem"}}>
        <CordiCard name="SV Sumanth" position="HEAD OF GAME DEVELOPMENT" img={sv}/>
        </WrapItem>
      </Wrap>
    </Flex>
    </>
  )
}

export default Cordinators