import { Card, Flex, Image, Text, Button } from "@chakra-ui/react";
import hackathon_img from "./Hackathon.jpg";
import rectangle from "./Rectangle 13.png";
import bg_rectangle from "./Rectangle 14.png";
import ellipse from "./Ellipse 17.png";

const Register = () => {
  return (
    <Card
      direction={{ base: "column", xl: "row-reverse" }}
      backgroundColor={"white"}
      opacity={"80%"}
      width={"60%"}
      height={"35%"}
      borderRadius={"30px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginTop={"3%"}
    >
      <Image objectFit={"cover"} maxH={{ base: "40%", xl: "70%" }} src={hackathon_img} paddingRight={{ xl: "5%" }} paddingTop={{ base: "1%", xl: "0%" }} />
      <Flex direction={"column"} justifyContent={"center"} height={"100%"}>
        <Text fontSize="2xl" p={"3%"} fontWeight={800} maxW={"80%"} paddingLeft={"10%"} fontFamily={"Didact Gothic"}>
          Register for the workshops and the hackathon
        </Text>
        <Flex alignItems={"center"} justifyContent={"center"} height={"40%"} width={"100%"}>
          <Button
            _hover={""}
            backgroundImage={rectangle}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            bgColor={"rgba(0,0,0,0)"}
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"40%"}
            width={"40%"}
          >
            <Text color={"#05AA9D"} width={"20%"} display={"contents"} fontFamily={"Megrim"} fontWeight={800}>
              Register
            </Text>
          </Button>
          <Flex zIndex={-1} position={"absolute"} height={"30%"}>
            <Image src={bg_rectangle} height={"40%"} marginTop={"30%"} marginLeft={"-60%"} />
            <Image src={ellipse} height={"40%"} marginLeft={"110%"} marginTop={"35%"} />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
