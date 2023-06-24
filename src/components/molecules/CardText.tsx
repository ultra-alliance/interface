import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import useBreakpoint from '../../hooks/useBreakpoint';
import React from 'react';

interface CardTextProps {
  src?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function CardText({
  src,
  alt,
  title,
  subtitle,
  onClick,
}: CardTextProps) {
  const { isSm } = useBreakpoint();
  const [isHover, setIsHover] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      elevation={0}
      sx={{
        borderRadius: 2,
        bgcolor: 'primary.light',
        position: 'relative',
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: isSm ? '360px' : '260px',
        backgroundOpacity: 0.1,
        boxShadow: theme => theme.shadows[5],
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Box
        width={'100%'}
        height={'100%'}
        bgcolor={'primary.light'}
        position={'absolute'}
        top={0}
        left={0}
        sx={{
          transition: 'all 0.2s ease-in-out',
          opacity: isHover ? 0.6 : 0,
        }}
      />

      <Box
        position={'absolute'}
        bottom={0}
        left={0}
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          width={'90%'}
          bgcolor={isHover ? 'primary.main' : 'background.paper'}
          padding={2}
          position={'relative'}
          top={2}
          sx={{
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <Typography variant="overline" color="text.primary">
            {alt}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            {subtitle}
          </Typography>
        </Box>{' '}
        <Box
          top={1}
          width={'100%'}
          height={'30px'}
          bgcolor={isHover ? 'primary.main' : 'background.paper'}
          sx={{
            transition: 'all 0.2s ease-in-out',
          }}
        />
      </Box>
    </Card>
  );
}
