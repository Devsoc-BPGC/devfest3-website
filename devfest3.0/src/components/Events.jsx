import { Flex, Box, Text, Image } from "@chakra-ui/react";
import gamejam from "./GameJam.png";

const Event = (props) => {
  return (
    <Flex width={"100%"} p={"3%"} direction={"column"}>
      <Flex position={"absolute"} left={"10%"} paddingLeft={"10%"} width={"40%"}>
        <Image src={props.image} />
      </Flex>
      <Box width={"60%"} borderRadius={"16px"} backgroundColor={"rgba(255,255,255, 0.2)"} marginLeft={"35%"} marginTop={"16%"} p={"1%"} color={"white"}>
        <Text textAlign={"center"} width={"100%"} fontSize={"3xl"} fontFamily={"Megrim"} fontWeight={800}>
          {props.name}
        </Text>
        <br></br>
        <Text fontFamily={"Didact Gothic"} fontSize={"xl"} fontWeight={400}>
          {props.content}
        </Text>
      </Box>
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
      <Event image={event_images[0]} name={event_names[1]} content={event_content[1]} />
      <Event image={event_images[0]} name={event_names[2]} content={event_content[2]} />
      <Event image={event_images[0]} name={event_names[3]} content={event_content[3]} />
    </>
  );
};

export default Events;
