import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import bgImg from "../StarBg.png";

const ParticleAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  //   const options = useMemo(
  //     () => ({
  //       background: {
  //         image: `url(${bgImg})`,
  //       },
  //       particles: {
  //         number: {
  //           value: 200,
  //         },
  //         color: {
  //           value: "#ffffff",
  //         },
  //         life: {
  //           count: 1,
  //           duration: {
  //             value: 10,
  //           },
  //         },
  //         shape: {
  //           type: "circle",
  //         },
  //         opacity: {
  //           value: 1,
  //         },
  //         size: {
  //           value: 3,
  //         },
  //         move: {
  //           enable: true,
  //           speed: 4,
  //           decay: 0.005,
  //           direction: "outside",
  //           straight: true,
  //           outModes: "destroy",
  //           trail: {
  //             enable: true,
  //             length: 100,
  //             fill: {
  //               color: "#000000",
  //             },
  //           },
  //         },
  //       },
  //       emitters: {
  //         position: {
  //           x: 50,
  //           y: 50,
  //         },
  //         size: {
  //           width: 100,
  //           height: 100,
  //         },
  //         rate: {
  //           quantity: 500,
  //           delay: 0.05,
  //         },
  //       },
  //     }),
  //     []
  //   );

  const options = useMemo(
    () => ({
      background: {
        image: `url(${bgImg})`,
      },
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: "#ffffff",
        },
        life: {
          count: 1,
          duration: {
            value: 5,
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
          speed: 7,
          decay: 0.005,
          direction: "outside",
          straight: true,
          outModes: "destroy",
          trail: {
            enable: true,
            length: 30,
            fill: {
              color: "#000000",
            },
          },
        },
      },
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default ParticleAnimation;
