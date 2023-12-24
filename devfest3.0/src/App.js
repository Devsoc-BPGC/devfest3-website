import { Flex, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import bgImg from "./StarBg.png";
import devfest from "./DEVF3ST.png";
import { motion } from "framer-motion";
import ParticleAnimation from "./components/ParticleAnimation";

function App() {
  return (
    <Flex direction="column" height={"100vh"} bgImage={bgImg} bgPosition={"center"} bgRepeat={"no-repeat"} bgColor={"black"}>
      <motion.div style={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: 10 } }}>
        <ParticleAnimation />
      </motion.div>
      <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 4 } }}>
        <NavBar />
      </motion.div>
      <Flex height={"100%"} alignItems={"center"} justifyContent={"center"}>
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 5 } }}>
          <Image src={devfest} height={150} />
        </motion.div>
      </Flex>
    </Flex>
  );
}

export default App;
