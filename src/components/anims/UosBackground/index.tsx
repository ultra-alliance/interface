import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from './particle-config';
import { useTheme } from '@mui/material';
import styled from 'styled-components';

interface UosBackgroundProps {
  height?: string;
  width?: string;
}

export default function UosBackground({
  height = '300px',
  width = '100%',
}: UosBackgroundProps) {
  const theme = useTheme();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const config = {
    ...ParticlesConfig,
    particles: {
      ...ParticlesConfig.particles,
      color: theme?.palette?.primary?.main,
      shape: {
        ...ParticlesConfig.particles.shape,
        stroke: {
          ...ParticlesConfig.particles.shape.stroke,
          color: theme?.palette?.primary?.main,
        },
      },
    },
  };

  return (
    <ParticleBox height={height} width={width}>
      <Particles
        id="tsparticles"
        params={config}
        canvasClassName="squares-anim"
        height={height}
        width={width}
        init={particlesInit}
      ></Particles>
    </ParticleBox>
  );
}

interface ParticleBoxProps {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

const ParticleBox = styled.div<ParticleBoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: ${props => props.height};
  width: ${props => props.width};
  #tsparticles {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    .squares-anim {
      position: absolute !important;
      width: 100%;
      height: 100% !important;
      top: 0;
      left: 0;
    }
  }
`;
