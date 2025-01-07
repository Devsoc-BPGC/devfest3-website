import { ChakraProvider, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import formidium_hackathon from "../components/formidium_hackathon.png";
import rectangle from "../components/Rectangle 1.png";
import purpose from "../components/purpose.svg";
import tracks from "../components/tracks_overview.png";
import problems from "../components/problems.png";
import bg from "../components/bg.png";

const Hackathons = () => {
  return (
    <ChakraProvider>
      <Flex bgColor={"black"} color={"white"} justify={"center"} align={"center"} width={"100%"} direction={"column"} bgImg={bg} bgPosition={'top'} bgSize={'contain'}>
        <Flex direction={"column"} align={"center"} justify={"center"} w={"100%"} height={{base: "50vh", lg: "80vh"}}>
          <Image src={formidium_hackathon} alt={"Formidium Hackathon"} width={"70%"} pointerEvents={"none"} />
        </Flex>
        <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"} direction={{ base: "column", lg: "row" }} mt={10}>
          <Flex alignItems={"center"} justifyContent={"center"} pl={{base: 0, lg: 10}}>
            <Text fontFamily={"ROGFont"} textAlign={{base: "center", lg: "start"}}>WELCOME TO THE SEAMLESS AI/BLOCKCHAIN HACKATHON!</Text>
          </Flex>
          <Flex bgImg={{base: 'none', lg: rectangle}} width={{base: "100%", lg: "70%"}} p={{base: 5, lg: 0}} pl={{base: 0, lg: 20}}>
            <Text fontFamily={"Sarpanch"} fontSize={"xs"} mx={5} textAlign={{base: "center", lg: "start"}}>
              This event is designed to inspire innovation in the application of AI to revolutionize sales and marketing strategies. Participants are free to choose any problem under one of the three
              tracks and may or may not select from the provided examples - solutions align with the focus of the chosen track
            </Text>
          </Flex>
        </Flex>
        <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"} direction={"column"} mt={10}>
          <Text fontFamily={"ROGFont"} fontSize={'xl'} textAlign={'center'}>PURPOSE OF THIS HACKATHON</Text>
          <img src={purpose} alt={"Purpose"} />
        </Flex>
        <Flex w={"100%"} m={10} justifyContent={"space-between"} direction={"column"} mt={10}>
          <Image src={tracks} alt={"Tracks"} width={{base: "95%", md: "60%", lg: "40%"}}/>
          <Text fontFamily={"Sarpanch"} my={"4rem"} mx={5} textAlign={'center'}>
            We've structured the hackathon into three distinct tracks to help participants channel their efforts and expertise:
          </Text>
          <Flex w={"60%"} ml={'20%'}>
            <VStack spacing={5} align={"start"} justify={"start"} fontFamily={"ROGFont"}>
              <Text>
                AI APPLICATIONS:<p style={{ fontFamily: "Sarpanch" }}>Build practical solutions that showcase the power of AI in domains like customer engagement, personal finance, and healthcare.</p>
              </Text>
              <Text>
                AI BENCHMARKING:
                <p style={{ fontFamily: "Sarpanch" }}>Evaluate and optimize the performance of AI models to improve efficiency, reduce biases, and enhance real-world usability.</p>
              </Text>
              <Text>
                BLOCKCHAIN PAYMENT SYSTEMS:
                <p style={{ fontFamily: "Sarpanch" }}>Explore blockchain's potential to revolutionize payments by designing secure, scalable, and decentralized systems.</p>
              </Text>
            </VStack>
          </Flex>
        </Flex>
        <Flex width={"100%"} fontFamily={"Sarpanch"} direction={"column"} mt={10}>
          <Image src={problems} alt={"Problems"} width={{base: "95%", md: "60%", lg: "40%"}} />
          <Flex direction={"column"} width={"80%"} ml="10%">
            <Text width={"100%"} textAlign={"center"} fontFamily={"ROGFont"} my={10} fontSize={"2xl"}>
              Track 1: AI Powered Applications
            </Text>
            <Text fontFamily={"ROGFont"} fontSize={"xl"}>
              Personalized Gift Recommendation AI:
            </Text>
            <Text>
              Build an AI-driven matching tool that provides personalized gift suggestions based on the user's personality traits and preferences.
              <br />
              Requirements:
              <br />- Create a 25-question personality survey to understand the user's preferences.
              <br />- Use AI to rank 20 predefined gift items based on the survey responses.
              <br />- Implement a conversational interface where the AI can "talk" to the user to refine suggestions or offer alternates.
              <br />- Capture shipping details in a 5-field address box.
            </Text>
            <Text fontFamily={"ROGFont"} mt={5} fontSize={"xl"}>
              AI-Powered Customer Service Recommendation Tool:
            </Text>
            <Text>
              Develop an AI-driven tool to analyze incoming customer emails and send actionable alerts to the Client Success team for prompt responses.
              <br />
              Requirements:
              <br />- Use Microsoft Graph API or similar tools to fetch and read incoming emails.
              <br />- Leverage Natural Language Processing (NLP) to classify emails by priority, sentiment, and topic.
              <br />- Automatically generate alerts for high-priority or negative sentiment emails and send them to the Client Success team.
              <br />- Provide a dashboard to view the status of analyzed emails and track the team's responses.
            </Text>
            <Text fontFamily={"ROGFont"} mt={5} fontSize={"xl"}>
              AI-Powered Lead Generation for Sales:
            </Text>
            <Text>
              Create an AI-based lead generation tool that identifies and ranks potential sales leads by analyzing public data sources.
              <br />
              Requirements:
              <br />- Collect relevant data from platforms like LinkedIn, Twitter, and GitHub. - Use AI to rank leads based on relevance, activity, and potential interest.
              <br />- Provide actionable insights, such as recent activities, interests, or mutual connections, to assist sales teams.
              <br />- Deliver a list of high-priority leads in a structured format (e.g., CSV, CRM integration).
            </Text>
          </Flex>
          <Flex direction={"column"} width={"80%"} ml="10%">
            <Text width={"100%"} textAlign={"center"} fontFamily={"ROGFont"} my={10} fontSize={"2xl"}>
              Track 2: Blockchain Payment Systems
            </Text>
            <Text fontFamily={"ROGFont"} fontSize={"xl"}>
              Cross-Border Payment Platform:
            </Text>
            <Text>
              Design a blockchain-based payment system that facilitates secure, fast, and low-cost cross-border transactions.
              <br />
              Requirements:
              <br />- Use Ethereum, Solana, or similar platforms for implementation.
              <br />- Enable currency conversion, transaction tracking, and compliance with international regulations.
              <br />- Ensure scalability to handle high transaction volumes while maintaining low fees.
            </Text>
            <Text fontFamily={"ROGFont"} fontSize={"xl"} mt={5}>Decentralized Subscription Payment System:</Text>
            <Text>
              Develop a blockchain-based solution for managing recurring payments in subscription services.
              <br />
              Requirements:
              <br />- Implement smart contracts that automate subscription payments and cancellations.
              <br />- Provide a user-friendly interface to manage subscriptions and view payment history.
              <br />- Ensure payment data is encrypted, and transactions are tamper-proof.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Hackathons;
