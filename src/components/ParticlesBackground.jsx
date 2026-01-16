import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // This initializes the animation engine once when the app starts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: {
      color: {
        value: "transparent", // Transparent so we see the body background
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // This makes the lines connect to your mouse
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 1,
            color: "#00ff00", // Matrix Green connections
          },
        },
      },
    },
    particles: {
      color: {
        value: "#00ff00", // Dot color
      },
      links: {
        color: "#00ff00", // Line color
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1, // Slow, ambient movement
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Number of dots on screen
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 -z-10"
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
