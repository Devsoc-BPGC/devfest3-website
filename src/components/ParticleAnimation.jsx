import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

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

  const options = useMemo(
    () => ({
      background: {
        // image: `url(${bgImg})`,
        color: "#000000",
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

  const options2 = useMemo(
    () => ({
      particles: {
        background: {
          color: "#000000",
        },
        number: {
          value: 100,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <motion.div style={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: 4 } }}>
          <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
        </motion.div>
        <motion.div style={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3, duration: 1 } }}>
          <Particles id="tsparticles2" particlesLoaded={particlesLoaded} options={options2} />
        </motion.div>
      </>
    );
  }

  return <></>;
};

export default ParticleAnimation;
