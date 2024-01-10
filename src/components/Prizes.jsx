import { Container, Flex, Text,Image,Link } from "@chakra-ui/react";
import echo3d from './echo3D.png'
const WinnerCard = (props) => {
  return (
    <Container paddingBottom={"10px"} bgColor={"rgba(256,256,256,0.15)"} borderRadius={"16px"} backdropFilter={"blur(1px)"} width={{ base: "50%", sm: "25%", lg: "15%" }} textAlign={"center"} m={"1%"}>
      <Text margin={"5px"} fontFamily={"Epilogue"} fontWeight={800} color={"white"} paddingTop={"5%"}>
        {props.title}
        </Text>
        <Image margin={"5px"} src={props.img}></Image>
        <Text margin={"5px"}color={"white"}>{props.disc}</Text>
        { (props.formLink!=null) ?
        <Link fontWeight={"800"} margin={"5px"} color={"#ADD8E6"} href={props.formLink}>Register Here</Link>
        : <></>
      }
    </Container>
  );
};

const Prizes = () => {
  return (
    <Flex direction={"column"} flex={2} width={"100%"} alignItems={"center"} marginTop={"3%"}>
      <Text fontFamily={"Megrim"} fontWeight={800} color={"white"} fontSize={"6xl"} marginBottom={"1%"}>
        Prizes
      </Text>
      <Flex flex={2} width={"100%"} direction={"column"}>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-around"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="echo3D" img={echo3d} disc={"echo3D a 3D asset management platform that enables developers to manage, update, and stream 3D content to real-time apps and games. For 1-month FREE access to echo3D Pro tier, register here: "} formLink={"https://console.echo3d.com/#/auth/register-promo?code=Jan2024echo925"} />
          <WinnerCard title="First Runner Up" />
          <WinnerCard title="Second Runner Up" />
        </Flex>
        <Flex width={"100%"} height={"100%"} justifyContent={"space-evenly"} alignItems={"center"} direction={{ base: "column", sm: "row" }}>
          <WinnerCard title="Top 25 Team" />
          <WinnerCard title="All Participants" />
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default Prizes;
