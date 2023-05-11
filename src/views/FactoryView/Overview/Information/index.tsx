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
  tFactoryManifested,
  isUltraAccount,
  tFactory,
  calcTotalResaleShare,
  calcPercentFromBasisPoint,
} from '@ultra-alliance/ultra-sdk';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ModalRoyalties from './ModalRoyalties';
import DataList from '@/components/lists/DataList';
import usePageRedirect from '@/hooks/usePageRedirect';

type InformationProps = {
  uniqData?: tFactoryManifested;
};

type ButtonAccountProps = {
  name: string;
  onClick?: () => void;
};

const ButtonAccount = ({ name, onClick }: ButtonAccountProps) => {
  return (
    <Button
      onClick={onClick}
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
  const { goToAccount } = usePageRedirect();
  const { data, manifest } = uniqData || {};
  if (!data || !manifest) return null;
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
      secondaryAction: (
        <ButtonAccount
          onClick={() => goToAccount(data?.asset_manager)}
          name={data?.asset_manager}
        />
      ),
    },
    {
      visible: true,
      primaryText: 'Asset Creator',
      tooltip: 'Account that created the token factory',
      secondaryAction: (
        <ButtonAccount
          name={data?.asset_creator}
          onClick={() => goToAccount(data?.asset_manager)}
        />
      ),
    },
    {
      visible: true,
      primaryText: 'Minimum Resale Price',
      tooltip: 'Minimum price for reselling the token',
      secondaryAction: (
        <PriceDisplayRatio
          uosPriceInBaseCurrency={0.32}
          coreLiquidityBalance={data?.minimum_resell_price}
        />
      ),
    },
    {
      visible: true,
      primaryText: `Royalties (${
        calcTotalResaleShare(data?.resale_shares).formatted
      })`,
      tooltip: 'Royalties for the token during resale',
      secondaryAction: (
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          {data?.resale_shares.length > 0 &&
          Number(data?.minimum_resell_price?.split(' ')[0]) > 0 ? (
            <PriceDisplayRatio
              uosPriceInBaseCurrency={0.32}
              coreLiquidityBalance={calcPercentFromBasisPoint({
                basis_point: calcTotalResaleShare(data?.resale_shares)
                  .basis_point,
                value: Number(data?.minimum_resell_price.split(' ')[0]),
              })}
            />
          ) : null}

          <ModalRoyalties
            shares={data?.resale_shares}
            minPrice={Number(data?.minimum_resell_price?.split(' ')[0])}
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
