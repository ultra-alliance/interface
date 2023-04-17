import React, { useState } from 'react';
import InfoCard from '@/components/molecules/InfoCard';
import {
  Avatar,
  Box,
  Button,
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
import {
  tUniqManifested,
  isUltraAccount,
  tUniq,
  calcTotalResaleShare,
  calcPercentFromBasisPoint,
} from '@ultra-alliance/ultra-sdk';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ModalRoyalties from './ModalRoyalties';
import DataList from '@/components/lists/DataList';

type InformationProps = {
  uniqData?: tUniqManifested;
};

type ButtonAccountProps = {
  name: string;
};

const ButtonAccount = ({ name }: ButtonAccountProps) => {
  return (
    <Button
      sx={{ color: 'primary.light' }}
      startIcon={
        <Avatar
          sx={{ width: 25, height: 25, bgcolor: 'primary.light' }}
          variant="rounded"
          alt={name}
          src={
            isUltraAccount(name)
              ? 'https://pbs.twimg.com/profile_images/1392037656004022273/jFSkZjjb_400x400.png'
              : undefined
          }
        />
      }
    >
      {name}
    </Button>
  );
};

export default function Information({ uniqData }: InformationProps) {
  const { uniq, manifest } = uniqData || {};
  if (!uniq || !manifest) return null;
  const listItems = [
    {
      visible: true,
      primaryText: 'Uniq Type',
      tooltip: 'The Uniq type (Collectibles, games, etc.)',
      secondaryAction: (
        <Chip
          size="medium"
          variant="filled"
          label={manifest?.type.toUpperCase()}
          sx={{
            fontWeight: 'bold',
            p: 2,
            boxShadow: theme => theme.shadows[2],
          }}
          icon={
            <Image
              src="/uniq-icon.svg"
              width={20}
              height={20}
              alt="uniq icon"
            />
          }
        />
      ),
    },
    {
      visible: true,
      primaryText: 'Asset Manager',
      tooltip:
        'Account	managing the token lifecycle - issuing, burning, reselling etc.',
      secondaryAction: <ButtonAccount name={uniq?.asset_manager} />,
    },
    {
      visible: true,
      primaryText: 'Asset Creator',
      tooltip: 'Account that created the token factory',
      secondaryAction: <ButtonAccount name={uniq?.asset_creator} />,
    },
    {
      visible: true,
      primaryText: 'Minimum Resale Price',
      tooltip: 'Minimum price for reselling the token',
      secondaryAction: (
        <PriceDisplayRatio
          uosPriceInBaseCurrency={0.32}
          coreLiquidityBalance={uniq?.minimum_resell_price}
        />
      ),
    },
    {
      visible: true,
      primaryText: `Royalties (${
        calcTotalResaleShare(uniq?.resale_shares).formatted
      })`,
      tooltip: 'Royalties for the token during resale',
      secondaryAction: (
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          {uniq?.resale_shares.length > 0 &&
          Number(uniq?.minimum_resell_price?.split(' ')[0]) > 0 ? (
            <PriceDisplayRatio
              uosPriceInBaseCurrency={0.32}
              coreLiquidityBalance={calcPercentFromBasisPoint({
                basis_point: calcTotalResaleShare(uniq?.resale_shares)
                  .basis_point,
                value: Number(uniq?.minimum_resell_price.split(' ')[0]),
              })}
            />
          ) : null}

          <ModalRoyalties
            shares={uniq?.resale_shares}
            minPrice={Number(uniq?.minimum_resell_price?.split(' ')[0])}
          />
        </Stack>
      ),
    },
  ];

  return (
    <InfoCard title="Information">
      <DataList listItems={listItems} />
    </InfoCard>
  );
}
