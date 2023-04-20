import React, { useState } from 'react';
import InfoCard from '@/components/molecules/InfoCard';
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { PriceDisplayRatio } from '@/components';
import InfoIcon from '@mui/icons-material/Info';
import More from '@mui/icons-material/More';
import { CURRENCIES } from '@ultra-alliance/react-ultra';
import { tUniqManifested } from '@ultra-alliance/ultra-sdk';
import DataList from '@/components/lists/DataList';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';

type SpecificationsProps = {
  uniqData?: tUniqManifested;
};

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number; max: number },
) {
  const percentage = (props.value / props.max) * 100;
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 'bold',
            color: percentage === 100 ? 'primary.light' : 'text.secondary',
          }}
        >{`${Math.round(percentage)}% minted`}</Typography>
        <Box flexGrow={1} />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 'bold',
            color: percentage === 100 ? 'primary.light' : 'text.secondary',
          }}
        >{`${props.value}/${props.max} TOKENS`}</Typography>
      </Stack>

      <Box sx={{ width: '100%' }}>
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{ width: '100%', height: 10, borderRadius: 1 }}
        />
      </Box>
    </Stack>
  );
}

export default function Specifications({ uniqData }: SpecificationsProps) {
  if (!uniqData) return null;
  const { uniq, manifest } = uniqData || {};

  const remaining = uniq?.max_mintable_tokens - uniq?.minted_tokens_no;

  return (
    <InfoCard title="Specifications">
      <Box padding={2} paddingBottom={0} marginBottom={-4}>
        <LinearProgressWithLabel
          value={uniq?.minted_tokens_no}
          max={uniq?.max_mintable_tokens}
        />
      </Box>
      <DataList
        listItems={[
          { visible: true },
          {
            visible: true,
            primaryText: 'Max Mintable Tokens',
            tooltip:
              'The maximal number of tokens that can be minted with the factory',
            secondaryAction: (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {uniq?.max_mintable_tokens} TOKEN(S)
              </Typography>
            ),
          },
          {
            visible: true,
            primaryText: 'Minted Tokens Number',
            tooltip: 'The number of minted of tokens.',
            secondaryAction: (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {uniq?.minted_tokens_no} TOKEN(S)
              </Typography>
            ),
          },
          {
            visible: true,
            primaryText: 'Existing Tokens Number',
            tooltip: '	The number of minted minus number of burnt tokens.',
            secondaryAction: (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {uniq?.existing_tokens_no} TOKEN(S)
              </Typography>
            ),
          },
          {
            visible: true,
            primaryText: 'Remaining to Mint',
            tooltip: 'The max mintable minus the minted number of tokens.',
            secondaryAction: (
              <Typography
                variant="body1"
                sx={{ color: remaining === 0 ? 'error.light' : 'success.main' }}
              >
                {remaining} TOKEN(S)
              </Typography>
            ),
          },
        ]}
      />
    </InfoCard>
  );
}
