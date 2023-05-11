import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  Chip,
  Divider,
  Fade,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  formatCurrencyValue,
  formatUosBalance,
  tTokenA,
  type tListedUniq,
  tFactoryManifested,
} from '@ultra-alliance/ultra-sdk';
import Image from 'next/image';
import { tCurrency } from '@ultra-alliance/react-ultra';
import UniqCreator from '../atoms/UniqCreator';
import { LocalGroceryStoreRounded, RemoveRedEye } from '@mui/icons-material';

type ListedUniqCardProps = {
  factoryManifested?: tFactoryManifested;
  listingDetails?: tListedUniq;
  owningDetails?: tTokenA;
  onClickView?: () => void;
  onClickBuy?: () => void;
  currency?: tCurrency;
  fiatPrice: number;
};

ListedUniqCard.defaultProps = {
  currency: undefined,
  fiatPrice: 0,
  factoryManifested: undefined,
  listingDetails: undefined,
  owningDetails: undefined,
  onClickView: () => {},
  onClickBuy: () => {},
};

export default function ListedUniqCard({
  factoryManifested,
  listingDetails,
  owningDetails,
  onClickView,
  onClickBuy,
  currency,
  fiatPrice,
}: ListedUniqCardProps) {
  const theme = useTheme();
  const listingPrice = listingDetails?.price?.split(' ')[0] || '0';
  const [isHovered, setIsHovered] = React.useState(false);

  const handleOver = () => setIsHovered(curr => !curr);
  return (
    <Box position={'relative'}>
      <Card
        elevation={1}
        onMouseEnter={handleOver}
        onMouseLeave={handleOver}
        sx={{
          border: '1px solid',
          borderColor: '#cccccc5a',
          boxShadow: theme => theme.shadows[8],
          transition: 'all 0.5s ease',
          background: theme =>
            `linear-gradient(180deg, rgba(150,150,150,0.1) 0%, rgba(150,150,150,0) 100%), linear-gradient(180deg, #3c3846 0%,  #3c3846 100%)`,
          '&:hover': {
            border: '2px solid',

            transition: 'all 0.2s ease',
            borderColor: theme => theme.palette.primary.main,
            transform: 'scale(1.04)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <CardActionArea
            disableTouchRipple
            sx={{
              boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.3)',
            }}
          >
            <Box
              sx={{
                p: 0,
                position: 'relative',
                aspectRatio: '1',
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
              }}
            >
              {!factoryManifested?.manifest?.media?.images?.square ? (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1',
                  }}
                />
              ) : (
                <CardMedia
                  sx={{
                    borderRadius: 1,
                    width: '100%',
                    height: '100%',
                    border: '1px solid',
                    borderColor: theme => theme.palette.divider,
                    transition: 'all 0.5s ease',
                    filter: isHovered ? 'blur(5px)' : 'blur(0px)',
                  }}
                  image={factoryManifested?.manifest?.media?.images?.square}
                  title="green iguana"
                />
              )}
              <Fade in={isHovered} unmountOnExit>
                <Stack
                  direction={'column'}
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    p: 1,
                    zIndex: 1000,
                    filter: 'none',
                    bgcolor: '#00000049',
                  }}
                >
                  <IconButton
                    onClick={onClickView}
                    sx={{
                      border: '1px solid',
                      color: 'white',
                      borderColor: 'white',
                      borderRadius: theme => theme.shape.borderRadius,
                      bgcolor: '#00000067',
                    }}
                  >
                    <RemoveRedEye fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={onClickBuy}
                    sx={{
                      border: '1px solid',
                      color: 'success.light',
                      borderColor: 'success.light',
                      borderRadius: theme => theme.shape.borderRadius,
                      bgcolor: '#00000074',
                    }}
                  >
                    <LocalGroceryStoreRounded sx={{}} fontSize="large" />
                  </IconButton>
                </Stack>
              </Fade>
            </Box>
            <CardContent>
              <Typography
                textAlign={'center'}
                variant="subtitle1"
                component="div"
                fontWeight={'bold'}
              >
                {!factoryManifested?.manifest?.name ? (
                  <Skeleton width={100} />
                ) : (
                  factoryManifested?.manifest?.name
                )}
              </Typography>
              <Typography
                textAlign={'center'}
                variant="subtitle2"
                color="text.secondary"
                component="div"
                fontWeight={'bold'}
              >
                {!factoryManifested?.manifest?.subName ? (
                  <Skeleton width={100} />
                ) : (
                  factoryManifested?.manifest?.subName
                )}
              </Typography>

              <UniqCreator
                name={
                  !isHovered
                    ? factoryManifested?.data?.asset_creator
                    : `N° ${owningDetails?.serial_number} /
                ${factoryManifested?.data?.max_mintable_tokens ?? '∞'}`
                }
                prefix={isHovered ? '' : 'By'}
                bold={!isHovered}
                visible={true}
              />
              <Divider sx={{ my: 1 }} />
              <List disablePadding>
                <ListItem disablePadding disableGutters>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 1,
                      color: theme.palette.primary.light,
                    }}
                    secondaryTypographyProps={{
                      textAlign: 'center',
                    }}
                    primary={
                      <>
                        x {formatCurrencyValue({ value: listingPrice })}
                        <span
                          style={{
                            color: 'white',
                            display: 'flex',
                            width: '25px',
                            height: '25px',
                            fontSize: '0.8rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '50%',
                          }}
                        >
                          {' ᕫ '}
                        </span>
                      </>
                    }
                    secondary={
                      currency?.ticker === 'UOS'
                        ? ''
                        : '± ' +
                          formatCurrencyValue({
                            value: fiatPrice,
                            ticker: currency?.symbol,
                          })
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Box>
      </Card>

      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          top: '-15px',
          left: '-15px',
        }}
      >
        <Grow in={isHovered} unmountOnExit>
          <Chip
            size="small"
            variant="filled"
            label={`    ${factoryManifested?.manifest.type
              .charAt(0)
              .toUpperCase()}${factoryManifested?.manifest.type.slice(1)}    `}
            sx={{
              backgroundColor: '#737373',
              boxShadow: theme => theme.shadows[4],
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
        </Grow>
      </Box>
    </Box>
  );
}
