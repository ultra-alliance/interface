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
  tTokenA,
} from '@ultra-alliance/ultra-sdk';
import Image from 'next/image';

type OwnedUniqCardProps = {
  manifest?: tManifest;
  uniq?: tUniq;
  ownedUniq?: tTokenA;
  onClick?: () => void;
};

OwnedUniqCard.defaultProps = {
  manifest: undefined,
  uniq: undefined,
  onClick: () => {},
};

export default function OwnedUniqCard({
  manifest,
  uniq,
  onClick,
  ownedUniq,
}: OwnedUniqCardProps) {
  const theme = useTheme();
  return (
    <Box position={'relative'}>
      <Card
        variant="elevation"
        elevation={2}
        sx={{
          border: '1px solid',
          borderColor: theme => theme.palette.divider,
          boxShadow: theme => theme.shadows[1],
          backgroundSize: 'contain !important',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
            background: theme =>
              `linear-gradient(to top, ${
                theme.palette.background.default
              } 50%, transparent 200%), url(${
                manifest?.media.images.square ?? ''
              })
            })`,
          }}
        >
          <Box
            sx={{
              pt: 2,
              position: 'relative',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
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
                  width: '30%',
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
              variant="subtitle1"
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
            <Typography
              sx={{
                my: -1,
              }}
              component={'div'}
              textAlign="center"
              variant="overline"
            >
              {!uniq?.asset_creator ? (
                <Skeleton width={'100%'} />
              ) : (
                <>
                  N°{ownedUniq?.serial_number} / {uniq?.max_mintable_tokens}
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
          label={
            manifest?.type &&
            manifest.type.charAt(0)?.toUpperCase() +
              manifest.type.slice(1) +
              ' #' +
              ownedUniq?.id
          }
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
