import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import bgImg from "./StarBg.png";
import devfest from "./DEVF3ST.png";
import { motion } from "framer-motion";
import ParticleAnimation from "./components/ParticleAnimation";
import FestNo from "./components/FestNo";
import Register from "./components/Register";
import Prizes from "./components/Prizes";

function App() {
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
          <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}>
            <Image src={devfest} height={150} />
          </motion.div>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
          <FestNo />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} height={"100vh"} direction={"column"}>
          <Register />
          <Prizes />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
