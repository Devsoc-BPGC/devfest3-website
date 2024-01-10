import { Card, Flex, Image, Text, Button } from "@chakra-ui/react";
import hackathon_img from "./Hackathon.jpg";
import rectangle from "./register here button.png";

const Register = () => {
  return (
    <Card
      direction={{ base: "column", xl: "row-reverse" }}
      backgroundColor={"white"}
      opacity={"80%"}
      width={{ base: "80%", md: "60%" }}
      height={"35%"}
      borderRadius={"30px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginTop={"3%"}
    >
      <Image objectFit={"cover"} height={{ base: "100px", sm: "150px", lg: "200px" }} src={hackathon_img} p={"2%"} />
      <Flex direction={"column"} justifyContent={"center"} height={"100%"}>
        <Text fontSize={{ base: "lg", md: "xl", xl: "2xl" }} p={"3%"} fontWeight={800} maxW={"80%"} paddingLeft={"10%"} fontFamily={"Didact Gothic"}>
          Register for the workshops and the hackathon
        </Text>
        <Flex alignItems={"center"} justifyContent={"center"} height={"40%"} width={"100%"}>
          <Button
            _hover={{ width: "45%" }}
            _active={""}
            backgroundImage={rectangle}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            bgColor={"rgba(0,0,0,0)"}
            width={"40%"}
            height={"100%"}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
