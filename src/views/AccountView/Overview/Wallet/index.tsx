import DataList from '@/components/lists/DataList';
import AssetAmount from '@/components/molecules/AssetAmount';
import InfoCard from '@/components/molecules/InfoCard';
import { ViewListRounded } from '@mui/icons-material';
import { Avatar, Button, IconButton, Typography } from '@mui/material';
import {
  formatNumeralAbreviation,
  formatCurrencyValue,
} from '@ultra-alliance/ultra-sdk';
import React from 'react';

interface WalletProps {
  coreLiquidBalance?: string;
  uniqsAmount?: number;
  onClickSeeInventory?: () => void;
}

export default function Wallet({
  coreLiquidBalance,
  uniqsAmount,
  onClickSeeInventory,
}: WalletProps) {
  const aboutUltraOperatingSystemList = [
    {
      visible: true,
      primaryText: 'Core Liquid Balance',
      tooltip: "The account's liquid balance",
      secondaryAction: (
        <>
          <Typography color={'primary.light'}>
            x{' '}
            <span style={{ fontWeight: 'bold' }}>
              {formatCurrencyValue({
                value: coreLiquidBalance || 0,
                ticker: '',
              })}
            </span>
          </Typography>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              fontWeight: 900,
              width: 30,
              height: 30,
              fontSize: 15,
            }}
          >
            ᕫ
          </Avatar>
        </>
      ),
    },
    {
      visible: true,
      primaryText: 'Uniqs in Inventory',
      tooltip: "The number of uniqs in the account's inventory",
      secondaryAction: (
        <>
          <AssetAmount amount={uniqsAmount} srcSet="/uniq-icon.svg" />
          <IconButton
            sx={{
              display: uniqsAmount && uniqsAmount > 0 ? 'flex' : 'none',
            }}
            onClick={onClickSeeInventory}
          >
            <ViewListRounded />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <>
      <InfoCard title="Wallet">
        <DataList listItems={aboutUltraOperatingSystemList} />
      </InfoCard>
    </>
  );
}
