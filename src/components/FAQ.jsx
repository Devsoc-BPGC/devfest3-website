import { Flex, Text } from "@chakra-ui/react";

const FAQ = (props) => {
  return (
    <Flex direction={"column"} color={"white"} m={"2%"}>
      <Text fontSize={"3xl"} fontWeight={600} fontFamily={"Didact Gothic"}>
        {props.question}
      </Text>
      <Text fontSize={"xl"} fontFamily={"Didact Gothic"}>
        {props.answer}
      </Text>
    </Flex>
  );
};

const FAQs = () => {
  const questions = [
    "1. What is DevFest?",
    "2. When and where is DevFest 3.0 happening?",
    "3. Who can participate in DevFest?",
    "4. Is there a registration fee for DevFest events?",
    "5. How can I register for specific events at DevFest?",
    "6. What are the prizes for the hackathon and GameJam?",
    "7. Can participants attend DevFest virtually?",
    "8. Will there be certificates provided for participation?",
    "9. How can I stay updated on DevFest announcements and news?",
    "10. How do I contact the organizers if I have more questions?",
  ];
  const answers = [
    "   - DevFest is an annual technical festival organized by Developers' Society, BITS Goa, featuring a series of events, including hackathons, gamejam, workshop, and expert speaker session, aimed at fostering a vibrant coding culture.",
    "   - DevFest 3.0 is scheduled from January 19th to January 21st, 2024. The event will take place in a hybrid mode, with in-person activities at BITS Pilani - Goa, and nationwide virtual participation.",
    "   - DevFest is open to everyone across the globe. Whether you're a seasoned developer or a beginner, there's something for everyone.",
    "   - No, all events at DevFest are entirely free.",
    "   - Event-specific registration details is available on the DevFest website. Simply visit the website, navigate to the event of your interest, and follow the registration instructions.",
    "   - Prizes for the hackathon and GameJam include cash rewards, vouchers, and more. The total prize pool is worth Rs. 20 lakhs+.",
    "   - Yes, DevFest offers nationwide virtual participation.",
    "   - Yes, participants will receive certificates for their involvement in DevFest events. These certificates acknowledge your participation and contribution to the festival.",
    "   - Follow us on our official social media channels and regularly visit the DevFest website for the latest updates, announcements, and news.",
    "   - For any inquiries, you can reach out to the DevFest organizing team through the provided contact details on the website or by emailing devsocbpgc@gmail.com.",
  ];
  return (
    <Flex direction={"column"} width={"100%"} p={"2%"} paddingTop={0}>
      <Text fontFamily={"Megrim"} fontSize={{ base: "3rem", md: "3.5rem", lg: "4rem", xl: "4.5rem", "2xl": "5em" }} color={"white"} width={"100%"}>
        FAQs
      </Text>
      {questions.map((item, i) => (
        <FAQ question={item} answer={answers[i]} />
      ))}
      ;
    </Flex>
  );
};

export default FAQs;
