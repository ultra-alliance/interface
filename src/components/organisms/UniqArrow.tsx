import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import { Arrow, UniqCreator } from '../atoms';
import { tListedUniqCard } from '@/hooks/useListedUniqs';
import useBreakPoint from '@/hooks/useBreakpoint';
import React from 'react';
import {
  tFactory,
  tFactoryManifested,
  tManifest,
} from '@ultra-alliance/ultra-sdk';

interface UniqArrowProps {
  factoryManifested?: tFactoryManifested;
  direction?: 'left' | 'right';
}

const UniqArrow = ({
  factoryManifested,
  direction = 'left',
}: UniqArrowProps) => {
  const isSm = useBreakPoint();

  return (
    <Arrow
      direction={direction}
      type="success"
      sx={{
        justifyContent: direction === 'left' ? 'flex-start' : 'flex-end',
      }}
    >
      <Box position={'relative'}>
        <Avatar
          sx={{
            width: 70,
            height: 70,
            border: '1px solid',
            borderColor: '#ffffffb7',
            boxShadow: theme => theme.shadows[1],
          }}
          src={factoryManifested?.manifest?.media.images.square}
        />
        <Avatar
          sx={{
            position: 'absolute',
            bottom: -5,
            right: -5,
            width: 20,
            height: 20,
            outline: '1px solid',
            outlineColor: '#ffffffb7',
            boxShadow: theme => theme.shadows[1],
          }}
          src={'/uniq-icon.svg'}
          imgProps={{
            sx: {
              width: 15,
              height: 15,
            },
          }}
        />
      </Box>
      <List disablePadding>
        <ListItem sx={{ py: 0 }}>
          <ListItemText
            primary={
              <Stack
                direction={isSm ? 'column' : 'row'}
                alignItems={isSm ? 'flex-start' : 'center'}
                gap={isSm ? 0 : 1}
              >
                <Typography variant="subtitle1" fontWeight={'bold'}>
                  {factoryManifested?.manifest.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.75 }}>
                  {factoryManifested?.manifest.subName}
                </Typography>
              </Stack>
            }
            secondary={
              <UniqCreator
                fullWidth={false}
                prefix="By"
                name={factoryManifested?.data.asset_creator}
              />
            }
          />
        </ListItem>
      </List>
    </Arrow>
  );
};

export default UniqArrow;
