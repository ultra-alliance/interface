import { ultraColors } from '@ultra-alliance/uikit';

const ParticlesConfig: any = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1600,
      },
    },
    color: {
      value: ultraColors.royalAmethyst,
    },
    shape: {
      type: 'image',
      stroke: {
        width: 0.5,
        color: 'white',
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: 'ultra-icon-white.png',
        width: 25,
        height: 25,
      },
    },
    opacity: {
      value: 0.15,
      random: true,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10.076771369474265,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 180.3412060865523,
      color: ultraColors.orchidHaze,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 10,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 2,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
export default ParticlesConfig;
