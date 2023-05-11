import React from 'react';
import { Slider, Typography, Box } from '@mui/material';
import useBreakPoint from '@/hooks/useBreakpoint';

interface AdverstiserCommissionSliderProps {
  value: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
}

const AdverstiserCommissionSlider = ({
  value,
  handleChange,
}: AdverstiserCommissionSliderProps) => {
  const { isSm } = useBreakPoint();
  const marks = [];
  for (let i = 2.5; i <= 10; i += 0.5) {
    marks.push({
      value: i,
      label: isSm && i % 2 !== 0 ? '' : `${i}%`,
    });
  }

  return (
    <Box sx={{ width: '100%', mt: 2, px: 2 }}>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="adversier-commission-slider"
        step={0.5}
        min={2.5}
        max={10}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default AdverstiserCommissionSlider;
