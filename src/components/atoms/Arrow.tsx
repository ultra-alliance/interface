import React from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';

interface ArrowProps {
  type?: 'primary' | 'success';
  children?: React.ReactNode;
  sx?: BoxProps['sx'];
  direction?: 'left' | 'right';
}

const Arrow = ({ type, children, sx, direction = 'right' }: ArrowProps) => {
  const theme = useTheme();
  const isRight = direction === 'right';
  const { primary, success } = theme.palette;
  const color = type === 'primary' ? primary.main : success.light + '8a';

  const clipPath = !isRight
    ? 'polygon(2% 0%, 100% 0%, 100% 100%, 2% 100%, 0% 50%)'
    : 'polygon(0% 0%, 98% 0%, 100% 50%, 98% 100%, 0% 100%)';

  const background = `linear-gradient(${
    isRight ? '270' : '90'
  }deg, ${color} 0%, rgba(255,255,255,0) 100%)`;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background,
        padding: '0 20px',
        height: 'auto',
        position: 'relative',
        WebkitClipPath: clipPath,
        clipPath: clipPath,
        px: 4,
        py: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Arrow;
