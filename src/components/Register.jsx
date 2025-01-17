import { Card, Flex, Image } from "@chakra-ui/react";
import hackathon_img from "./hackathonimg.png";

const Register = () => {
  return (
    <Card
      direction={{ base: "column", xl: "row" }}
      backgroundColor="transparent"
      opacity="0.8"
      width="100%"
      height={{ base: "auto", lg: "35%" }}
      alignItems="center"
      justifyContent="space-between"
      marginTop="3%"
    >
      <Image
        src={hackathon_img}
        alt="Hackathon Button"
        objectFit="cover"
        height={{ base: "3.5rem", md: "5.5rem", lg: "6.5rem", xl: "8.5rem" }} 
        width="auto"
        cursor="pointer"
        _hover={{ scale: "1.2" }}
        onClick={() => {
          window.location.href = "https://formidium-devfest-goa.devfolio.co/";
        }}
        borderRadius="15px"
      />

      <Flex
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        height="100%"
        flex="1"
        paddingLeft="2rem"
      >
      </Flex>
    </Card>
  );
};

export default Register;
