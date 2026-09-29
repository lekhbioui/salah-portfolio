import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const InteractiveParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.06,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            outModes: { default: "out" },
            random: true,
            straight: false,
          },
          number: {
            value: 40,
            density: { enable: true, area: 1000 },
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: { enable: true },
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.2 },
            },
          },
        },
      }}
    />
  );
};

export default InteractiveParticles;