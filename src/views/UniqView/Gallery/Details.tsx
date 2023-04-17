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
import { tUniqManifested } from '@ultra-alliance/ultra-sdk';
import DataList, { ListItemData } from '@/components/lists/DataList';
import { Download } from '@mui/icons-material';

type DetailsProps = {
  uniqData?: tUniqManifested;
};

export default function Details({ uniqData }: DetailsProps) {
  const { uniq, manifest } = uniqData || {};
  if (!uniq || !manifest) return null;
  const listItems: ListItemData[] = [
    {
      visible: true,
      primaryText: 'Spec Version',
      secondaryText: `v${manifest.specVersion}`,
      tooltip: 'The version of the spec used to create this Uniq metadata',
      secondaryAction: (
        <Button
          variant="contained"
          size="small"
          color="primary"
          startIcon={<Download />}
          href={uniq.meta_uris[0]}
        >
          Download ZIP
        </Button>
      ),
    },
  ];

  return (
    <InfoCard title="Metadata">
      <DataList listItems={listItems} />
    </InfoCard>
  );
}
