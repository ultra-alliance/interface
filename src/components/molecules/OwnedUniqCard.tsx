import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  Button,
  CardActionArea,
  Chip,
  Divider,
  Fade,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  type tFactory,
  type tManifest,
  tTokenA,
  tListedUniq,
  formatCurrencyValue,
} from '@ultra-alliance/ultra-sdk';
import Image from 'next/image';
import {
  LocalGroceryStore,
  RemoveRedEye,
  Send,
  Verified,
} from '@mui/icons-material';
import { UniqCreator } from '../atoms';
import { ultraColors } from '@ultra-alliance/uikit';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';

type OwnedUniqCardProps = {
  manifest?: tManifest;
  uniq?: tFactory;
  ownedUniq?: tTokenA;
  hoverable?: boolean;
  listingDetails?: tListedUniq | undefined;
  withActions?: boolean;
  viewDetailBtn?: boolean;
  hasUniq?: boolean;
  isUniqAvatar?: boolean;
  onClickViewDetails: () => void;
  onClickTransfer: () => void;
  onClickResale: () => void;
  onClickCancelResale: () => void;
  onClickSetAvatar: () => void;
  onClickClearAvatar: () => void;
};

OwnedUniqCard.defaultProps = {
  manifest: undefined,
  uniq: undefined,
  hoverable: true,
  listingDetails: undefined,
  withActions: true,
  viewDetailBtn: true,
  hasUniq: false,
  isUniqAvatar: false,
  onClickViewDetails: () => {},
  onClickTransfer: () => {},
  onClickResale: () => {},
  onClickCancelResale: () => {},
  onClickSetAvatar: () => {},
  onClickClearAvatar: () => {},
};

interface CardListItemButtonProps {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CardListItemButton = ({
  onClick,
  primary,
  secondary,
  icon,
}: CardListItemButtonProps) => (
  <ListItemButton
    onClick={onClick}
    sx={{
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    disableTouchRipple
  >
    <ListItemAvatar>{icon}</ListItemAvatar>
    <ListItemText
      primaryTypographyProps={{
        fontWeight: 'bold',
      }}
      primary={primary}
      secondary={secondary}
    />
  </ListItemButton>
);

export default function OwnedUniqCard({
  manifest,
  uniq,
  ownedUniq,
  hoverable,
  listingDetails,
  hasUniq,
  isUniqAvatar,
  withActions,
  viewDetailBtn,
  onClickViewDetails,
  onClickTransfer,
  onClickResale,
  onClickCancelResale,
  onClickSetAvatar,
  onClickClearAvatar,
}: OwnedUniqCardProps) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);
  const { account } = useUltra();

  const handleHover = () => setIsHovered(curr => !curr);

  const menus: CardListItemButtonProps[] = [];
  if (viewDetailBtn) {
    menus.push({
      onClick: () => onClickViewDetails(),
      primary: 'View details',
      icon: <RemoveRedEye />,
    });
  }
  if (withActions) {
    menus.push({
      onClick: () => onClickTransfer(),
      primary: 'Transfer Uniq',
      icon: <Send />,
    });

    if (listingDetails !== undefined) {
      menus.push({
        onClick: () => onClickCancelResale(),
        primary: 'Cancel Resale',
        icon: <LocalGroceryStore />,
      });
    } else {
      menus.push({
        onClick: () => onClickResale(),
        primary: 'Resale Uniq',
        icon: <LocalGroceryStore />,
      });
    }

    if (hasUniq) {
      switch (isUniqAvatar) {
        case true:
          menus.push({
            onClick: () => onClickClearAvatar(),
            primary: 'Clear Avatar',
            icon: (
              <Avatar
                sx={{
                  filter: 'grayscale(100%)',
                }}
                src={manifest?.media.images.square}
              />
            ),
          });
          break;
        case false:
          menus.push({
            onClick: () => onClickSetAvatar(),
            primary: 'Set Avatar',
            icon: <Avatar src={manifest?.media.images.square} />,
          });
          break;
      }
    }
  }

  return (
    <Box position={'relative'}>
      <Card
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        variant="elevation"
        elevation={2}
        sx={{
          border: '1px solid',
          borderColor: theme =>
            uniq?.max_mintable_tokens === 1 ? '#786d31' : theme.palette.divider,
          boxShadow: theme => theme.shadows[1],
          '&:hover': {
            transition: 'all 0.35s ease',
            borderColor: hoverable
              ? uniq?.max_mintable_tokens === 1
                ? '#f1d329'
                : theme.palette.primary.light
              : '',
            transform: 'scale(1.04)',
          },
        }}
      >
        <CardActionArea
          disableTouchRipple
          sx={{
            boxShadow: 'inset 0px 0px 0px 2px rgba(0,0,0,0.3)',
            background: ultraColors.eclipseTwilight,
            transition: 'all 0.35s ease',
            filter: isHovered && hoverable ? 'blur(25px)' : 'blur(0px)',
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
                sx={{
                  aspectRatio: '1',
                  width: '30%',
                  height: 'auto',
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
            <Typography
              textAlign={'center'}
              variant="overline"
              color="text.secondary"
              component="div"
            >
              N°{ownedUniq?.serial_number ?? '∞'} / {uniq?.max_mintable_tokens}
            </Typography>
            <UniqCreator name={uniq?.asset_creator} visible={true} />
          </CardContent>
        </CardActionArea>
        <Fade in={isHovered && hoverable} unmountOnExit>
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
              bgcolor: ultraColors.eclipseTwilight,
            }}
          >
            <List
              sx={{
                width: '100%',
                '& .MuiListItemButton-root:hover': {
                  color: 'primary.light',
                },
              }}
            >
              {menus?.map((menu, index) => (
                <CardListItemButton
                  key={index}
                  onClick={menu.onClick}
                  primary={menu.primary}
                  secondary={menu.secondary}
                  icon={menu.icon}
                />
              ))}
            </List>
          </Stack>
        </Fade>
      </Card>
      <Grow in={isHovered}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            top: '-10px',
            left: '-10px',
          }}
        >
          <Chip
            size="small"
            variant="filled"
            label={manifest?.type && ' #' + ownedUniq?.id}
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
      </Grow>

      {listingDetails && (
        <Box
          sx={{
            transition: 'all 0.35s ease',
            position: 'absolute',
            display: 'flex',

            top: isHovered ? '-10px' : '-8px',
            right: isHovered ? '-10px' : '-8px',
            transform: isHovered ? 'scale(1.04)' : '',
          }}
        >
          <Chip
            size="small"
            variant="filled"
            label={formatCurrencyValue({
              value: listingDetails?.price,
              ticker: CURRENCIES[0].symbol,
            })}
            sx={{
              fontWeight: 'bold',
              backgroundColor: 'error.light',
              '& span': {},
            }}
          />
        </Box>
      )}
    </Box>
  );
}
