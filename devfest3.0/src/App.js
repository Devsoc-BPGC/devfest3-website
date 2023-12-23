import { Flex, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import bgImg from "./StarBg.png";
import devfest from "./DEVF3ST.png";
import { motion } from "framer-motion";

function App() {
  return (
    <Flex direction="column" height={"100vh"} bgImage={bgImg} bgPosition={"center"} bgRepeat={"no-repeat"} bgColor={"black"}>
      <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}>
        <NavBar />
      </motion.div>
      <Flex height={"100%"} alignItems={"center"} justifyContent={"center"}>
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2, delay: 2 } }}>
          <Image src={devfest} height={150} />
        </motion.div>
      </Flex>
    </Flex>
  );
}

export default App;
