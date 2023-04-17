import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Divider, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  formatCurrencyValue,
  formatUosBalance,
  type tListedUniq,
  type tUniq,
  type tManifest,
} from '@ultra-alliance/ultra-sdk';
import Image from 'next/image';

type UniqCardProps = {
  manifest?: tManifest;
  uniq?: tUniq;
  onClick?: () => void;
};

UniqCard.defaultProps = {
  manifest: undefined,
  uniq: undefined,
  onClick: () => {},
};

export default function UniqCard({ manifest, uniq, onClick }: UniqCardProps) {
  const theme = useTheme();
  return (
    <Box position={'relative'}>
      <Card
        elevation={1}
        sx={{
          border: '1px solid',
          borderColor: theme => theme.palette.divider,
          boxShadow: theme => theme.shadows[1],
          '&:hover': {
            transition: 'all 0.2s ease',
            borderColor: theme => theme.palette.primary.light,
          },
        }}
      >
        <CardActionArea
          onClick={onClick}
          sx={{
            boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.3)',
          }}
        >
          <Box sx={{ p: 1, position: 'relative' }}>
            {!manifest?.media?.images?.square ? (
              <Skeleton
                variant="rectangular"
                width={'100%'}
                sx={{
                  aspectRatio: '1',
                }}
              />
            ) : (
              <CardMedia
                sx={{
                  aspectRatio: '1',
                  borderRadius: 1,
                  boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.3)',
                  border: '1px solid',
                  borderColor: theme => theme.palette.divider,
                }}
                image={manifest?.media?.images?.square}
                title="green iguana"
              />
            )}
          </Box>
          <CardContent>
            <Typography
              textAlign={'center'}
              variant="h6"
              component="div"
              fontWeight={'bold'}
            >
              {!manifest?.name ? <Skeleton width={100} /> : manifest?.name}
            </Typography>
            <Typography
              textAlign={'center'}
              variant="body2"
              color="text.secondary"
              component="div"
            >
              {!manifest?.subName ? (
                <Skeleton width={100} />
              ) : (
                manifest?.subName
              )}
            </Typography>
            <Divider sx={{ py: 1 }} />
            <Typography
              sx={{
                pt: 1,
                color: 'white',
              }}
              component={'div'}
              textAlign="center"
              fontWeight={'bold'}
              variant="overline"
            >
              {!uniq?.asset_creator ? (
                <Skeleton width={'100%'} />
              ) : (
                <>
                  <span style={{ fontWeight: 'normal' }}>by</span>{' '}
                  {uniq.asset_creator}
                </>
              )}{' '}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          top: '-5px',
          left: '-5px',
        }}
      >
        <Chip
          size="small"
          variant="filled"
          label="Collectible"
          sx={{
            backgroundColor: '#737373',
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
      </Box>
    </Box>
  );
}
