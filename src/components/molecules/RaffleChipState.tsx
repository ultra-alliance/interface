import { Chip } from '@mui/material';
import React from 'react';

interface RaffleChipStateProps {
  active?: boolean;
  closed?: boolean;
}

function getChipInfo(closed?: boolean, active?: boolean) {
  let data = {
    text: '',
    color: '',
  };
  if (closed) {
    data.text = 'Closed';
    data.color = 'error.main';
    return data;
  } else {
    if (active) {
      data.text = 'Active';
      data.color = 'success.main';
      return data;
    } else {
      data.text = 'Inactive';
      data.color = 'info.main';
      return data;
    }
  }

  return data;
}

export default function RaffleChipState({
  closed,
  active,
}: RaffleChipStateProps) {
  const { text, color } = getChipInfo(closed, active);
  return (
    <Chip
      size="small"
      variant="filled"
      label={text}
      sx={{
        backgroundColor: color,
        boxShadow: theme => theme.shadows[4],
      }}
    />
  );
}
