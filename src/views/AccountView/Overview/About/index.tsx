import DataList from '@/components/lists/DataList';
import InfoCard from '@/components/molecules/InfoCard';
import RessourceUsage from '@/components/molecules/RessourceUsage';
import { LoyaltyRounded, StorageRounded } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import {
  tGetAccountOutput,
  formatUosBalance,
  formatComputeUnit,
  formatNumeralAbreviation,
  formatCurrencyValue,
} from '@ultra-alliance/ultra-sdk';
import React from 'react';

interface AboutProps {
  account?: tGetAccountOutput;
}

export default function About({ account }: AboutProps) {
  const aboutUltraOperatingSystemList = [
    {
      visible: true,
      primaryText: 'Ultra Power Weight',
      secondaryAction: (
        <Typography sx={{ color: 'primary.light', fontWeight: 'bold' }}>
          <span style={{ color: 'white' }}>
            {formatCurrencyValue({
              value: account?.total_resources?.power_weight || 0,
              ticker: '',
            })}
          </span>
          <span> ᕫ</span>
        </Typography>
      ),
    },
    {
      visible: true,
      children: (
        <RessourceUsage
          max={account?.ram_quota}
          usage={account?.ram_usage}
          title="RAM Available"
        />
      ),
    },
    {
      visible: true,
      primaryText: 'CPU Power used',
      tooltip: "The account's CPU power used",
      secondaryAction: (
        <Typography>
          <span style={{ fontWeight: 'bold' }}>
            {account?.cpu_limit?.used === -1
              ? '∞'
              : account?.cpu_limit.used || 0}
          </span>{' '}
          {account?.cpu_limit?.used !== -1 && 'us'}
        </Typography>
      ),
    },
    {
      visible: true,
      primaryText: 'Net Power used',
      secondaryAction: (
        <Typography>
          <span style={{ fontWeight: 'bold' }}>
            {account?.net_limit?.used === -1
              ? '∞'
              : formatComputeUnit(account?.net_limit.used || 0)}
          </span>
        </Typography>
      ),
    },
  ];
  return (
    <>
      <InfoCard title="Ultra Operating System">
        <DataList listItems={aboutUltraOperatingSystemList} />
      </InfoCard>
    </>
  );
}
