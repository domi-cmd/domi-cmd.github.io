tsParticles.load("tsparticles", {
    preset: "links",
    background: {
      color: "#000",
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 55,
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
      },
    },
    retina_detect: true,
  });