import { ChakraProvider, Flex, Image,Box, Button,Text,Wrap,WrapItem ,Link} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import bgImg from "./StarBg.png";
import devfest from "./DEVF3ST.png";
import { motion } from "framer-motion";
import ParticleAnimation from "./components/ParticleAnimation";
import FestNo from "./components/FestNo";
import Timetable from "./components/Timetable";
import Register from "./components/Register";
import Prizes from "./components/Prizes";
import Sponsorscard from "./components/Sponsorscard";
import Speakers from "./components/Speakers";
import { useEffect } from "react";
import jacket from './components/Jacket.png'
import dv from './components/devfolio_logo_small.png'
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <ChakraProvider>
      <Flex direction="column" minH={"100%"} bgImage={bgImg} bgPosition={"center"} bgColor={"black"} scrollBehavior={true}>
        <motion.div style={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: 8 } }}>
          <ParticleAnimation />
        </motion.div>
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 3 } }}>
          <NavBar />
        </motion.div>
        <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
          <motion.div style={{ opacity: 0,height:"100%",width:"100%" }} animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}>
            <Flex flexDir={"column"} alignItems={"center"} justifyContent={"space-evenly"} height={"100%"} width={"100%"}>
            <Image src={devfest} height={{xl:200,md:150,sm:100,base:50}} />
            <Wrap height="3.5rem" width={"100%"} justify='space-evenly' spacing='30px'>
              <WrapItem>
              <Button variant={"link"} backgroundColor={"#3770FF"} width={"15rem"}>
              <Image height={"80%"} src={dv}></Image>
      <Text color={"white"}>Register for Hackathon</Text>
              </Button>
              </WrapItem>
              <WrapItem>
                <Link href={"https://forms.gle/8hTpsxaBWHphR3JfA"}>
              <Button width={"12rem"}>
                <Text fontFamily={"McLaren"} margin={"5px"}>Merchandise</Text>
                <Image height={"80%"} src={jacket}></Image>
              </Button>
              </Link>
              </WrapItem>
            </Wrap>
            </Flex>
          </motion.div>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
          <FestNo />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} height={"100vh"} direction={"column"}>
          <Register />
          <Prizes />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} minH={"100vh"}>
          <Timetable />
        </Flex>
        <Flex alignItems={"start"} justifyContent={"end"} minH={"100vh"} p={"5%"}>
          <Speakers />
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-evenly"} height={"100vh"} direction={"column"}>
          <Sponsorscard/>
        </Flex>
    </Flex>
    </ChakraProvider>
  );
}

export default App;
