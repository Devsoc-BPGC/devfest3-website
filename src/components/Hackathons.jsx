// import React from "react";
// import { ChakraProvider, Flex, Text, IconButton, Link, Button } from "@chakra-ui/react";
// import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import bg from "../components/hackathon_background.png";

// const Hackathons = () => {
//   return (
//     <ChakraProvider>
//       <Flex direction="column" bgPosition={"center"} bgColor={"black"} scrollBehavior={true} overflowX={"hidden"} justifyContent={"end"} bgImage={bg} color={"white"}>
//         <Flex color={"white"} direction={"column"} alignItems={"center"} justifyContent={"center"}>
//           <Text fontSize={"6xl"} fontFamily={"Megrim"}>
//             HACKATHONS
//           </Text>
//         </Flex>
//         <Flex flexDir={"column"}>
//           <Text>WELCOME TO THE SEAMLESS AI/BLOCKCHAIN HACKATHON!</Text>
//           <Text>
//             This event is designed to inspire innovation in the application of AI to revolutionize sales and marketing strategies. Participants are free to choose any problem under one of the three
//             tracks and may or may not select from the provided examples - solutions align with the focus of the chosen track.
//           </Text>
//         </Flex>
//         {/* <Flex width={"100%"} justifyContent={"space-evenly"} zIndex={2} p={"1%"}>
//           <Link href="https://www.instagram.com/devsocbitsgoa/" isExternal>
//             <IconButton icon={<FaInstagramSquare style={{ height: "30px", width: "30px" }} />} height={"max-content"} minW={"unset"} />
//           </Link>
//           <Link href="https://www.linkedin.com/company/13598216/" isExternal>
//             <IconButton icon={<FaLinkedin style={{ height: "30px", width: "30px" }} />} height={"max-content"} minW={"unset"} />
//           </Link>
//           <Link href="https://twitter.com/devsocbitsgoa" isExternal>
//             <Button height={"max-content"} minW={"unset"} p={0} style={{ height: "30px", width: "30px" }}>
//               𝕏
//             </Button>
//           </Link>
//         </Flex>
//         <Flex color={"white"} justifyContent={"space-between"} alignItems={"center"}>
//           <Flex direction={"column"} p={"1%"}>
//             <Text color={"lightgray"}>Email</Text>
//             <Link href="mailto:devsocbpgc@gmail.com" fontWeight={700}>
//               devsocbpgc@gmail.com
//             </Link>
//           </Flex>
//           <Flex direction={"column"} p={"1%"}>
//             <Text color={"lightgray"} textAlign={"right"}>
//               Phone no.
//             </Text>
//             <Text fontWeight={700}>+91 85398 53805</Text>
//             <Text fontWeight={700}>+91 84002 36921</Text>
//           </Flex>
//         </Flex>
//         <footer style={{ color: "white", fontSize: "1rem", backgroundColor: "black", textAlign: "center" }}>
//           Made with ❤️ by{" "}
//           <a href="https://devsoc.club" style={{ color: "#ADD8E6" }}>
//             DevSoc
//           </a>
//         </footer> */}
//       </Flex>
//     </ChakraProvider>
//   );
// };

// export default Hackathons;

import React from "react";
import { ChakraProvider, Flex, Text, VStack, Box, Container, IconButton, Link, Button } from "@chakra-ui/react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import bg from "../components/hackathon_background.png";
import formidium from "../components/formidium.png";

const Hackathons = () => {
  return (
    <ChakraProvider>
      <Box bgImage={bg} bgSize="cover" bgPosition="center" bgRepeat="no-repeat" minHeight="100vh" color="white">
        <Container maxW="90vw" py={10}>
          <VStack spacing={8} align="start">
            <Flex justifyContent="center" width="full">
              {/* <Text fontSize="6xl" fontFamily="Megrim" fontWeight="bold" textAlign="center">
                SEAMLESS AI/BLOCKCHAIN HACKATHON
              </Text> */}
              <img src={formidium} alt="formidium" style={{ width: "100%" }} />
            </Flex>

            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                WELCOME TO THE SEAMLESS AI/BLOCKCHAIN HACKATHON!
              </Text>
              <Text mt={4} lineHeight="1.8" fontSize={"xl"}>
                This event is designed to inspire innovation in the application of AI to revolutionize sales and marketing strategies. Participants are free to choose any problem under one of the
                three tracks and may or may not select from the provided examples - solutions align with the focus of the chosen track.
              </Text>
            </Box>

            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                Purpose of This Hackathon
              </Text>
              <VStack align="start" spacing={2} fontSize={"xl"} ml={4}>
                <Text>Foster Innovation: Provide a platform for participants to think creatively and explore unique solutions to complex problems.</Text>
                <Text>Learn and Build Together: Encourage collaboration and skill development in two of the most transformative technologies of our time—Blockchain and AI.</Text>
                <Text>
                  Solve Real-World Challenges: Develop practical applications that have the potential to make a tangible impact in various industries, such as finance, healthcare, and technology.
                </Text>
              </VStack>
            </Box>

            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                Tracks Overview
              </Text>
              <Text mb={4} lineHeight="1.8" fontSize={"xl"}>
                We've structured the hackathon into three distinct tracks to help participants channel their efforts and expertise:
              </Text>
              <VStack align="start" spacing={6} fontSize={"xl"} ml={4}>
                <Box>
                  <Text fontWeight="bold">AI Applications:</Text>
                  <Text>Build practical solutions that showcase the power of AI in domains like customer engagement, personal finance, and healthcare.</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold">AI Benchmarking:</Text>
                  <Text>Evaluate and optimize the performance of AI models to improve efficiency, reduce biases, and enhance real-world usability.</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold">Blockchain Payment Systems:</Text>
                  <Text>Explore blockchain's potential to revolutionize payments by designing secure, scalable, and decentralized systems.</Text>
                </Box>
              </VStack>
            </Box>

            <Box width={"100%"}>
              <Text fontSize="4xl" fontWeight="bold" mb={2} width={"100%"} textAlign={"center"}>
                Problem Statements
              </Text>
              <VStack align="start" spacing={8}>
                <Box>
                  <Text fontWeight="bold" fontSize={"3xl"}>
                    Track 1: AI Powered Applications
                  </Text>
                  <VStack align="start" spacing={4} mt={4} fontSize={"xl"}>
                    <Box>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        Personalized Gift Recommendation AI:
                      </Text>
                      <Text>Build an AI-driven matching tool that provides personalized gift suggestions based on the user's personality traits and preferences.</Text>
                      <Text>Requirements:</Text>
                      <Text>- Create a 25-question personality survey to understand the user's preferences.</Text>
                      <Text>- Use AI to rank 20 predefined gift items based on the survey responses.</Text>
                      <Text>- Implement a conversational interface where the AI can "talk" to the user to refine suggestions or offer alternates.</Text>
                      <Text>- Capture shipping details in a 5-field address box.</Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        AI-Powered Customer Service Recommendation Tool:
                      </Text>
                      <Text>Develop an AI-driven tool to analyze incoming customer emails and send actionable alerts to the Client Success team for prompt responses.</Text>
                      <Text>Requirements:</Text>
                      <Text>- Use Microsoft Graph API or similar tools to fetch and read incoming emails.</Text>
                      <Text>- Leverage Natural Language Processing (NLP) to classify emails by priority, sentiment, and topic.</Text>
                      <Text>- Automatically generate alerts for high-priority or negative sentiment emails and send them to the Client Success team.</Text>
                      <Text>- Provide a dashboard to view the status of analyzed emails and track the team's responses.</Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        AI-Powered Lead Generation for Sales:
                      </Text>
                      <Text>Create an AI-based lead generation tool that identifies and ranks potential sales leads by analyzing public data sources.</Text>
                      <Text>Requirements:</Text>
                      <Text>- Collect relevant data from platforms like LinkedIn, Twitter, and GitHub.</Text>
                      <Text>- Use AI to rank leads based on relevance, activity, and potential interest.</Text>
                      <Text>- Provide actionable insights, such as recent activities, interests, or mutual connections, to assist sales teams.</Text>
                      <Text>- Deliver a list of high-priority leads in a structured format (e.g., CSV, CRM integration).</Text>
                    </Box>
                  </VStack>
                </Box>

                <Box>
                  <Text fontWeight="bold" fontSize={"3xl"}>
                    Track 2: Blockchain Payment Systems
                  </Text>
                  <VStack align="start" spacing={4} mt={4} fontSize={"xl"}>
                    <Box>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        Cross-Border Payment Platform:
                      </Text>
                      <Text>Design a blockchain-based payment system that facilitates secure, fast, and low-cost cross-border transactions.</Text>
                      <Text>Requirements:</Text>
                      <Text>- Use Ethereum, Solana, or similar platforms for implementation.</Text>
                      <Text>- Enable currency conversion, transaction tracking, and compliance with international regulations.</Text>
                      <Text>- Ensure scalability to handle high transaction volumes while maintaining low fees.</Text>
                    </Box>

                    <Box>
                      <Text fontWeight="bold" fontSize={"2xl"}>
                        Decentralized Subscription Payment System:
                      </Text>
                      <Text>Develop a blockchain-based solution for managing recurring payments in subscription services.</Text>
                      <Text>Requirements:</Text>
                      <Text>- Implement smart contracts that automate subscription payments and cancellations.</Text>
                      <Text>- Provide a user-friendly interface to manage subscriptions and view payment history.</Text>
                      <Text>- Ensure payment data is encrypted, and transactions are tamper-proof.</Text>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Flex width={"100%"} justifyContent={"space-evenly"} zIndex={2} p={"1%"} bgColor={"black"}>
        <Link href="https://www.instagram.com/devsocbitsgoa/" isExternal>
          <IconButton icon={<FaInstagramSquare style={{ height: "30px", width: "30px" }} />} height={"max-content"} minW={"unset"} />
        </Link>

        <Link href="https://www.linkedin.com/company/13598216/" isExternal>
          <IconButton icon={<FaLinkedin style={{ height: "30px", width: "30px" }} />} height={"max-content"} minW={"unset"} />
        </Link>

        <Link href="https://twitter.com/devsocbitsgoa" isExternal>
          <Button height={"max-content"} minW={"unset"} p={0} style={{ height: "30px", width: "30px" }}>
            𝕏
          </Button>
        </Link>
      </Flex>

      <Flex bgColor={"black"} color={"white"} justifyContent={"space-between"} alignItems={"center"}>
        <Flex direction={"column"} p={"1%"}>
          <Text color={"lightgray"}>Email</Text>
          <Link href="mailto:devsocbpgc@gmail.com" fontWeight={700}>
            devsocbpgc@gmail.com
          </Link>
        </Flex>

        <Flex direction={"column"} p={"1%"}>
          <Text color={"lightgray"} textAlign={"right"}>
            Phone no.
          </Text>
          <Text fontWeight={700}>+91 85398 53805</Text>
          <Text fontWeight={700}>+91 84002 36921</Text>
        </Flex>
      </Flex>

      <footer style={{ color: "white", fontSize: "1rem", backgroundColor: "black", textAlign: "center" }}>
        Made with ❤️ by
        <a href="https://devsoc.club" style={{ color: "#ADD8E6" }}>
          DevSoc
        </a>
      </footer>
    </ChakraProvider>
  );
};

export default Hackathons;
