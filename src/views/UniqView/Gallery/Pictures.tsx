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
import { PriceDisplayRatio } from '@/components';
import InfoIcon from '@mui/icons-material/Info';
import More from '@mui/icons-material/More';
import { CURRENCIES } from '@ultra-alliance/react-ultra';
import { tUniqManifested } from '@ultra-alliance/ultra-sdk';
import DataList, { ListItemData } from '@/components/lists/DataList';
import { Download } from '@mui/icons-material';
import Image from 'next/image';

type PicturesProps = {
  uniqData?: tUniqManifested;
};

export default function Pictures({ uniqData }: PicturesProps) {
  const { uniq, manifest } = uniqData || {};
  if (!uniq || !manifest) return null;

  return (
    <InfoCard title={manifest.subName}>
      {manifest.media.images.hero && (
        <>
          <img alt="here-img" width={'100%'} src={manifest.media.images.hero} />
        </>
      )}

      {manifest.media.images.product && (
        <>
          <img
            alt="product-img"
            src={manifest.media.images.product}
            width={'100%'}
          />
        </>
      )}

      {manifest?.media?.gallery?.map((img: string, index: number) => (
        <img
          key={index}
          alt="square-img"
          src={img}
          width={'100%'}
          height={'auto'}
        />
      ))}
    </InfoCard>
  );
}
