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
import { tFactoryManifested } from '@ultra-alliance/ultra-sdk';
import DataList from '@/components/lists/DataList';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import { formatNumeralAbreviation } from '@ultra-alliance/ultra-sdk';

type SpecificationsProps = {
  uniqData?: tFactoryManifested;
  isInfinityMint?: boolean;
};

function LinearProgressWithLabel(
  props: LinearProgressProps & {
    value: number;
    max: number;
    isInfinityMint?: boolean;
  },
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
        >{`${
          props?.isInfinityMint ? '∞ ' : Math.round(percentage)
        }% minted`}</Typography>
        <Box flexGrow={1} />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 'bold',
            color: percentage === 100 ? 'primary.light' : 'text.secondary',
          }}
        >{`${formatNumeralAbreviation(props.value)}/${
          props?.isInfinityMint ? '∞ ' : formatNumeralAbreviation(props.max)
        } TOKENS`}</Typography>
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

export default function Specifications({
  uniqData,
  isInfinityMint,
}: SpecificationsProps) {
  if (!uniqData) return null;
  const { data, manifest } = uniqData || {};

  const remaining = data?.max_mintable_tokens - data?.minted_tokens_no;
  const infintyTxt = isInfinityMint ? '∞' : '';

  return (
    <InfoCard title="Specifications">
      <Box padding={2} paddingBottom={0} marginBottom={-4}>
        <LinearProgressWithLabel
          value={data?.minted_tokens_no}
          max={data?.max_mintable_tokens}
          isInfinityMint={isInfinityMint}
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
                {isInfinityMint
                  ? '∞ '
                  : formatNumeralAbreviation(data?.max_mintable_tokens)}{' '}
                TOKEN(S)
              </Typography>
            ),
          },
          {
            visible: true,
            primaryText: 'Minted Tokens Number',
            tooltip: 'The number of minted of tokens.',
            secondaryAction: (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {formatNumeralAbreviation(data?.minted_tokens_no)} TOKEN(S)
              </Typography>
            ),
          },
          {
            visible: true,
            primaryText: 'Existing Tokens Number',
            tooltip: '	The number of minted minus number of burnt tokens.',
            secondaryAction: (
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {formatNumeralAbreviation(data?.existing_tokens_no)} TOKEN(S)
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
                {isInfinityMint ? '∞ ' : formatNumeralAbreviation(remaining)}{' '}
                TOKEN(S)
              </Typography>
            ),
          },
        ]}
      />
    </InfoCard>
  );
}
