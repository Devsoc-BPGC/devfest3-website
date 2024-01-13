import { Flex, Text, Image, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Heading, Link } from "@chakra-ui/react";
import gamejam from "./GameJam.png";

const Event = (props) => {
  const gamejam_info1 = `🎮Attention game developers!!🎮

  If you are a seasoned game developer or someone who wants to explore the vast world of game development, we have exactly what you need 💪🏻💪🏻
  
  Get ready for the ultimate showdown as DevFest 3.0 brings you an electrifying GameJam in collaboration with the renowned India Game Developers Conference (IGDC)🤯. Whether you're a seasoned game developer or a newbie eager to dive into the world of game development, there's something extraordinary waiting for you!
  
  For the Beginners:
  Never tried game development? Fear not! Thanks to our collaboration with Outscal, we're offering you FREE access to courses worth Rs. 1000 each. Complete the courses, earn a valuable certificate from Outscal, and set yourself on the path to a rewarding game development career.
  
  For the Seasoned Pros:
  Exciting prizes await the winners including free passes for the IGDC flagship event later this year. Gather your squad, showcase your skills, and seize the victory!
  
  But that's not all!
  
  Further, if you do take part in the GameJam, and make a submission, you unlock access to advanced level courses for FREE. Outscal will also further help you find internships and job opportunities based on your current skill level.
  
  Ready to embark on this exciting journey?
  
  To Register:
  Fill out the form: `;

  const gamejam_info2 = `
  After completing the form, click on the link on the exit page to access course links and instructions.
  
  Seize the opportunity, level up your game, and let the journey begin!
  
  More details about the game jam and teams will be communicated after filling the form.`;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex width={"100%"} p={"3%"} direction={"column"}>
      <Flex position={"absolute"} left={"10%"} paddingLeft={"10%"} width={"40%"}>
        <Image src={props.image} />
      </Flex>
      <Flex direction={"column"} width={"60%"} borderRadius={"16px"} backgroundColor={"rgba(255,255,255, 0.2)"} marginLeft={"35%"} marginTop={"16%"} p={"2%"} color={"white"} alignItems={"center"}>
        <Text textAlign={"center"} width={"100%"} fontSize={"3xl"} fontFamily={"Megrim"} fontWeight={800}>
          {props.name}
        </Text>
        <br></br>
        <Text fontFamily={"Didact Gothic"} fontSize={"xl"} fontWeight={400}>
          {props.content}
        </Text>
        {props.register ? (
          <Button colorScheme="blue" width={"20%"} m={"3%"} marginBottom={"0"} onClick={onOpen}>
            Register
          </Button>
        ) : (
          <></>
        )}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"60%"}>
          <ModalHeader textAlign={"center"}>
            <Heading>GameJam</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text whiteSpace={"pre-line"}>{gamejam_info1}</Text>
            <Link color={"#0000EE"} href="https://forms.gle/anTQmMuB6HQZtznj7" isExternal textDecoration={"underline"}>
              https://forms.gle/anTQmMuB6HQZtznj7
            </Link>
            <Text whiteSpace={"pre-line"}>{gamejam_info2}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

const Events = () => {
  const event_images = [gamejam];
  const event_names = ["DevStorm", "GameJam", "Workshop", "Guest Speaker"];
  const event_content = [
    "DevStorm, our very own hackathon is not just a competition; it's a thrilling journey of innovation and problem-solving. With lucrative prizes for the top three, participation certificates, swags, goodies, and vouchers, it's a chance to showcase students' coding prowess. Whether one is a seasoned developer or a coding enthusiast, our hybrid model welcomes both on-campus and online participants.",
    "A gaming marathon that transcends boundaries and sparks a symphony of pixels and imagination! For 48 exhilarating hours, immerse in the world of game development. Prizes await the most innovative creations, alongside participation certificates, swags, goodies, and vouchers. Our hybrid model ensures that both on-campus and online participants can contribute their unique flair. Whether one is a coding maestro or a game design enthusiast, this is their stage to shine.",
    "In a power-packed 6-hour session, learn the intricacies of software development. Guided by industry experts, build a complete project, gaining hands-on experience and valuable insights. With an emphasis on practicality, this workshop promises to be the launchpad for one's software development journey.",
    "Join us for insights from seasoned software development speaker, unveiling the pathways to success in the ever-evolving tech landscape. From innovative projects to career hacks, this session promise a goldmine of knowledge. It is not just a talk; this is an opportunity to connect, learn, and ignite aspirations.",
  ];
  return (
    <>
      <Event image={event_images[0]} name={event_names[0]} content={event_content[0]} />
      <Event image={event_images[0]} name={event_names[1]} content={event_content[1]} register={true} />
      <Event image={event_images[0]} name={event_names[2]} content={event_content[2]} />
      <Event image={event_images[0]} name={event_names[3]} content={event_content[3]} />
    </>
  );
};

export default Events;
