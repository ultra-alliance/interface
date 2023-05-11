import React from 'react';
import InfoCard from '@/components/molecules/InfoCard';

import { tFactoryManifested } from '@ultra-alliance/ultra-sdk';
import DataList, { ListItemData } from '@/components/lists/DataList';
import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';

type DetailsProps = {
  factoryData?: tFactoryManifested;
};

export default function Details({ factoryData }: DetailsProps) {
  const { data, manifest } = factoryData || {};
  if (!data || !manifest) return null;
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
          href={data.meta_uris[0]}
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
