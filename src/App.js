import { ChakraProvider, Flex, Image, Wrap, WrapItem, Divider, IconButton, Button, Text, Link } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
// import devfest from "./DEVF3ST.png";
import devfest40 from "./components/devfest40.png";
import formidium from "./components/formidium.png";
import locvector from "./components/locvector.png";
import logo from "./components/devsocbwlogo.png"

// import { motion } from "framer-motion";
// import ParticleAnimation from "./components/ParticleAnimation";
import FestNo from "./components/FestNo";
import Timetable from "./components/Timetable";
import Register from "./components/Register";
import Prizes from "./components/Prizes";
import Sponsorscard from "./components/Sponsorscard";
// import Speakers from "./components/Speakers";
import { useEffect } from "react";
// import jacket from "./components/Jacket.png";
import { useRef } from "react";
// import Events from "./components/Events";
import About from "./components/About";
import FAQs from "./components/FAQ";
import Team from "./components/Team";
import Cordinators from "./components/Cordinators";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
// import starbg from '../src/StarBg.png'
import bg from "./components/bg.png";

import './App.css';

function App() {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://apply.devfolio.co/v2/sdk.js";
    // script.async = true;
    // script.defer = true;
    // document.body.appendChild(script);
    return () => {
      // document.body.removeChild(script);
    };
  }, []);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const timelineRef = useRef(null);
  const prizesRef = useRef(null);
  const sponsorsRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <ChakraProvider>
      <Flex bgColor={"black"} color={"white"}  width={"100%"} direction={"column"} bgImg={bg} bgPosition={'top'} bgSize={'contain'} fontFamily={"sarpanch"}>
        {/* <ParticleAnimation /> */}
        {/* <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 3 } }}> */}
          <NavBar aboutRef={aboutRef} eventsRef={eventsRef} timelineRef={timelineRef} prizesRef={prizesRef} sponsorsRef={sponsorsRef} teamRef={teamRef} faqRef={faqRef} />
        {/* </motion.div> */}
        <Flex alignItems={"center"} justifyContent={"center"} height={{base: "60vh", md: "100vh"}}>
          {/* <motion.div style={{ opacity: 0, height: "100%", width: "100%" }} animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}> */}
            <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} height={"100%"} width={"100%"}>
              <Image src={formidium} position="relative" height={{ xl: 100, md: 75, sm: 50, base: 30 }} left={"-30px"} />
              <Image src={devfest40} height={{ xl: 400, md: 300, sm: 200, base: 100 }}  mb={5} />
              <Flex alignItems="center" mb={5}>
              <Image src={locvector} alt="Location Vector" mr={2} />
                  <Text fontSize={{ xl: 24, md: 20, sm: 15, base: 10 }} fontFamily={"Sarpanch"}>BITS Pilani K.K. Birla Goa Campus</Text>
              </Flex>
              <Wrap height="3.5rem" width={"100%"} justify="space-evenly" spacing="30px">
                <WrapItem>
                  <div id="apply-button" className="apply-button" data-hackathon-slug="formidium-devfest-goa" data-button-theme="light" style={{ height: "3rem", width: "15rem" }}></div>
                </WrapItem>
              </Wrap>
            </Flex>
          {/* </motion.div> */}
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} height={{base: "30vh", md: "100vh"}}>
          <FestNo />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} direction={"column"} minH={"100vh"} ref={timelineRef}>
          <Timetable />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} direction={"column"} ref={prizesRef}>
          <Register />
          <Prizes />
        </Flex>
        {/* <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"start"} justifyContent={"end"} minH={"100vh"} p={"5%"} direction={"column"} ref={eventsRef}>
          <Events />
        </Flex> */}
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} direction={"column"} id={"sponsors"} ref={sponsorsRef}>
          <Sponsorscard />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"start"} direction={"column"} ref={aboutRef}>
          <About />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex ref={teamRef}>
          <Team />
        </Flex>
        <Flex minH={"100vh"}>
          <Cordinators />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex direction={"column"} ref={faqRef}>
          <FAQs />
        </Flex>
        <Flex width="100%" justifyContent="space-between" alignItems="center" backgroundColor="black" zIndex={2} p="1%">
          <Flex alignItems="center">
            <Image src={logo} alt="Your Logo" height="150px" /> 
          </Flex>
          <Flex justifyContent="flex-end" alignItems="center" gap={9}>
            <Link href="https://www.instagram.com/devsocbitsgoa/" isExternal>
              <IconButton 
                icon={<FaInstagramSquare style={{ height: "30px", width: "30px" }} />} 
                height="max-content" 
                minW="unset" 
                aria-label="Instagram"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/13598216/" isExternal>
              <IconButton 
                icon={<FaLinkedin style={{ height: "30px", width: "30px" }} />} 
                height="max-content" 
                minW="unset" 
                aria-label="LinkedIn"
              />
            </Link>
            <Link href="https://twitter.com/devsocbitsgoa" isExternal>
              <Button 
                height="max-content" 
                minW="unset" 
                p={0} 
                style={{ height: "30px", width: "30px" }}
                aria-label="Twitter"
              >
                𝕏
              </Button>
            </Link>
          </Flex>
        </Flex>

<Flex 
  color="white" 
  justifyContent="space-between" 
  alignItems="center" 
  bg={"black"}
  p="1%"
>
  <Flex direction="column" p="1%">
    <Text color="lightgray">Email</Text>
    <Link href="mailto:devsocbpgc@gmail.com" fontWeight={700}>
      devsocbpgc@gmail.com
    </Link>
  </Flex>

  <Flex direction="column" p="1%">
    <Text color="lightgray" textAlign="right">
      Phone no.
    </Text>
    <Text fontWeight={700}>+91 85398 53805</Text>
    <Text fontWeight={700}>+91 84002 36921</Text>
  </Flex>
</Flex>

        <footer style={{ color: "white", fontSize: "1rem", backgroundColor: "black", textAlign: "center" }}>
          Made with ❤️ by{" "}
          <a href="https://devsoc.club" style={{ color: "#ADD8E6" }}>
            DevSoc
          </a>
        </footer>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
