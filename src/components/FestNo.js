import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Box } from "@chakra-ui/react";
import fest3 from "../components/pho1.jpg";
import fest4 from "../components/pho2.jpg";
import fest5 from "../components/pho3.jpg";
function FestNo() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          speed: 1000,
          easing: 'ease-in-out',
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          pauseOnHover: true,
          pagination: true,
          arrows: true,
          drag: "free",
        }}
        aria-label="Image Carousel"
        style={{ maxWidth: "90%", maxHeight: "80%", margin: "0 auto" }}
      >
        {/* Slides */}
        <SplideSlide>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <img
              src={fest3}
              alt="Fest 3"
              style={{
                width: "auto",
                height: "50%",
                objectFit: "contain",
              }}
            />
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <img
              src={fest4}
              alt="Fest 4"
              style={{
                width: "auto",
                height: "50%",
                objectFit: "contain",
              }}
            />
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <img
              src={fest5}
              alt="Fest 5"
              style={{
                width: "auto",
                height: "50%",
                objectFit: "contain",
              }}
            />
          </Box>
        </SplideSlide>
      </Splide>
    </Box>
  );
}

export default FestNo;
