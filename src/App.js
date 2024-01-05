import { ChakraProvider, Flex, Image, Button, Text, Wrap, WrapItem, Link, Divider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
import jacket from "./components/Jacket.png";
import { useRef } from "react";
import Events from "./components/Events";
function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const sponsRef = useRef(null);
  const speakersRef = useRef(null);
  const merchRef = useRef(null);
  const eventsRef = useRef(null);
  return (
    <ChakraProvider>
      <Flex direction="column" minH={"100%"} bgPosition={"center"} bgColor={"black"} scrollBehavior={true}>
        <ParticleAnimation />
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, delay: 3 } }}>
          <NavBar sponsRef={sponsRef} speakersRef={speakersRef} merchRef={merchRef} eventsRef={eventsRef} />
        </motion.div>
        <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"} ref={merchRef}>
          <motion.div style={{ opacity: 0, height: "100%", width: "100%" }} animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}>
            <Flex flexDir={"column"} alignItems={"center"} justifyContent={"space-evenly"} height={"100%"} width={"100%"}>
              <Image src={devfest} height={{ xl: 200, md: 150, sm: 100, base: 50 }} />
              <Wrap height="3.5rem" width={"100%"} justify="space-evenly" spacing="30px">
                <WrapItem>
                  <div id="apply-button" className="apply-button" data-hackathon-slug="devfest-3" data-button-theme="light" style={{ height: "3rem", width: "15rem" }}></div>
                </WrapItem>
                <WrapItem>
                  <Link href={"https://forms.gle/8hTpsxaBWHphR3JfA"}>
                    <Button width={"12rem"}>
                      <Text fontFamily={"McLaren"} margin={"5px"}>
                        Merchandise
                      </Text>
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
        <Flex alignItems={"center"} justifyContent={"center"} minH={"100vh"} ref={eventsRef}>
          <Timetable />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} height={"100vh"} direction={"column"}>
          <Register />
          <Prizes />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"start"} justifyContent={"end"} minH={"100vh"} p={"5%"} direction={"column"}>
          <Events />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"start"} justifyContent={"end"} minH={"100vh"} p={"5%"} ref={speakersRef}>
          <Speakers />
        </Flex>
        <Flex width={"100%"} justifyContent={"center"}>
          <Divider borderColor={"#0F9F96"} m={"5%"} width={"90%"} borderRadius={"4px"} borderBottomWidth={"2px"} opacity={1} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-evenly"} height={"100vh"} direction={"column"} id={"sponsors"} ref={sponsRef}>
          <Sponsorscard />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
