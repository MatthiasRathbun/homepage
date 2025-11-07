import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const containerRef = useRef(null);
  const engineLoaded = useRef(false);

  const particlesInit = useCallback(
    async (engine) => {
      if (engineLoaded.current) {
        return;
      }
      await loadFull(engine);
      engineLoaded.current = true;
    },
    []
  );

  const handleParticlesLoaded = useCallback((container) => {
    containerRef.current = container;
  }, []);

  useEffect(
    () => () => {
      containerRef.current?.destroy();
      containerRef.current = null;
    },
    []
  );

  const options = useMemo(
    () => ({
      background: {
        color: '#222',
      },
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
        },
        opacity: {
          value: 0.4,
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 100,
          color: '#ffffff',
          opacity: 1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.6,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'out',
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: false,
          },
          resize: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="particle-field"
      style={{ width: '100%', height: '100%' }}
      init={particlesInit}
      loaded={handleParticlesLoaded}
      options={options}
    />
  );
};

export default memo(ParticlesBackground);
