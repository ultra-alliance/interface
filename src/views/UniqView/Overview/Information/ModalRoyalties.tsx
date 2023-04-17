import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@/components/modals/Modal';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { AvatarGroup, IconButton, List, Stack } from '@mui/material';
import {
  tResaleShare,
  formatBasisPoint,
  isUltraAccount,
  calcPercentFromBasisPoint,
} from '@ultra-alliance/ultra-sdk';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import { PriceDisplayRatio } from '@/components';

type ModalRoyaltiesProps = {
  shares: tResaleShare[];
  minPrice?: number;
};

export default function ModalRoyalties({
  shares,
  minPrice,
}: ModalRoyaltiesProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Stack direction="row" spacing={0} alignItems={'center'}>
        {minPrice === 0 && (
          <Avatar
            sx={{ width: 30, height: 30, bgcolor: 'primary.light' }}
            variant="rounded"
            alt={'Resale Shares'}
          >
            +{shares?.length}
          </Avatar>
        )}

        <IconButton onClick={handleOpen}>
          <UnfoldMoreIcon sx={{ color: 'primary.light' }} />
        </IconButton>
      </Stack>

      <Modal
        title={'Resale Shares'}
        aria-labelledby="resale-shares"
        aria-describedby="resale-shares-details"
        open={open}
        onClose={handleClose}
      >
        <React.Fragment>
          <Stack padding={0} direction="column" spacing={2}>
            <List>
              {shares?.map((share, index) => (
                <ListItem
                  key={share.receiver}
                  secondaryAction={
                    minPrice !== 0 ? (
                      <Stack direction="row" spacing={1}>
                        <PriceDisplayRatio
                          uosPriceInBaseCurrency={0.32}
                          coreLiquidityBalance={calcPercentFromBasisPoint({
                            basis_point: share.basis_point,
                            value: Number(minPrice),
                          })}
                        />
                      </Stack>
                    ) : (
                      formatBasisPoint(share.basis_point)
                    )
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        variant="rounded"
                        sx={{
                          bgcolor: 'primary.light',
                        }}
                        src={
                          isUltraAccount(share.receiver)
                            ? 'https://pbs.twimg.com/profile_images/1392037656004022273/jFSkZjjb_400x400.png'
                            : undefined
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          fontWeight: 'bold',
                        },
                      }}
                      primary={share.receiver}
                      secondary={
                        minPrice !== 0
                          ? formatBasisPoint(share.basis_point)
                          : null
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>{' '}
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
}
