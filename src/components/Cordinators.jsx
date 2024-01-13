import { Wrap,WrapItem,Text,Flex,Image } from '@chakra-ui/react'
import sayanthan from './sayantan.jpg'
import ruchik from './ruchik.jpg'
import aryan from './aryan.jpg'
import aditya from './aditya.jpg'
import shubh from './shubh.jpg'
import React from 'react'
import sv from './sv.jpg'
function Cordinators() {
  return (
    <>
       <Flex width={"100%"} direction={"column"} alignItems={"center"} p={"2%"} paddingTop={0}>
      <Text fontFamily={"Megrim"} fontSize={"6xl"} color={"white"} width={"100%"} paddingBottom={"2rem"}>
            Coordinators
      </Text>
      <Wrap justify={"space-evenly"} align={"center"}>
        <WrapItem height={"10%"} width={"25%"} margin={"10px"}>
            <Flex flexDir={"column"} justifyContent={"center"}>
                <Image src={sayanthan} objectFit={"fill"}></Image>
                <Text fontFamily={"Megrim"} fontSize={"4xl"} color={"white"} textAlign={"center"}>Sayantan Bera</Text>
                <Text fontFamily={"Megrim"} fontSize={"2xl"} color={"lightblue"}  textAlign={"center"}>Chief Coordinator</Text>
            </Flex>
        </WrapItem>
        <WrapItem height={"10%"} width={"25%"} margin={"10px"}>
            <Flex flexDir={"column"} justifyContent={"center"}>
                <Image src={ruchik} objectFit={"fill"}></Image>
                <Text fontFamily={"Megrim"} fontSize={"4xl"} color={"white"} textAlign={"center"}>Ruchik Bakhai</Text>
                <Text fontFamily={"Megrim"} fontSize={"2xl"} color={"lightblue"} textAlign={"center"}>Sub-Coordinator</Text>
            </Flex>
        </WrapItem>
        <WrapItem height={"10%"} width={"25%"} margin={"10px"}>
            <Flex flexDir={"column"} justifyContent={"center"}>
                <Image src={aryan} objectFit={"fill"}></Image>
                <Text fontFamily={"Megrim"} fontSize={"4xl"} color={"white"} textAlign={"center"}>Aryan Bhosale</Text>
                <Text fontFamily={"Megrim"} fontSize={"2xl"} color={"lightblue"}  textAlign={"center"}>Web Development Head</Text>
            </Flex>
        </WrapItem>
        <WrapItem height={"10%"} width={"25%"} margin={"10px"}>
            <Flex flexDir={"column"} justifyContent={"center"}>
                <Image src={aditya} objectFit={"fill"}></Image>
                <Text fontFamily={"Megrim"} fontSize={"4xl"} color={"white"} textAlign={"center"}>Aditya Handur-Kulkarni</Text>
                <Text fontFamily={"Megrim"} fontSize={"2xl"} color={"lightblue"}  textAlign={"center"}>Mobile App Development Head</Text>
            </Flex>
        </WrapItem>
        <WrapItem height={"10%"} width={"25%"} margin={"10px"}>
            <Flex flexDir={"column"} justifyContent={"center"}>
                <Image src={shubh} objectFit={"fill"}></Image>
                <Text fontFamily={"Megrim"} fontSize={"4xl"} color={"white"} textAlign={"center"}>Shubh Agarwal</Text>
                <Text fontFamily={"Megrim"} fontSize={"2xl"} color={"lightblue"}  textAlign={"center"}>UI/UX Head</Text>
            </Flex>
        </WrapItem>
        <WrapItem height={"10%"} width={"25%"} margin={"10px"}>
            <Flex flexDir={"column"} justifyContent={"center"}>
                <Image src={sv} objectFit={"fill"}></Image>
                <Text fontFamily={"Megrim"} fontSize={"4xl"} color={"white"} textAlign={"center"}>S V Sumanth</Text>
                <Text fontFamily={"Megrim"} fontSize={"2xl"} color={"lightblue"}  textAlign={"center"}>Game Development Head</Text>
            </Flex>
        </WrapItem>
      </Wrap>
    </Flex>
    </>
  )
}

export default Cordinators