import * as React from 'react';

import {
  Menu,
  Button,
  Avatar,
  Typography,
  Box,
  TextField,
  Divider,
  Stack,
} from '@mui/material';
import { useTransferUos, useUltra } from '@ultra-alliance/react-ultra';
import { formatUosBalance } from '@ultra-alliance/ultra-sdk';
import { toast } from 'react-toastify';
import useBreakPoint from '../../../../hooks/useBreakpoint';
import InputUosPrice from '@/components/inputs/InputUosPrice';
import { isUltraAccount } from '@ultra-alliance/ultra-sdk';

export default function TransferUos() {
  const { logout, account } = useUltra();
  const { isSm } = useBreakPoint();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {
    transferUos,
    quantity,
    memo,
    to,
    handleMemoChange,
    handleQuantityChange,
    handleToChange,
  } = useTransferUos();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickTransfer = () => {
    transferUos()
      .then(() => {
        toast.success('Transfer successful!');
        handleClose();
      })
      .catch(e => {
        toast.error('Transfer failed!');
        handleClose();
      });
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClick}
        startIcon={
          <Avatar
            variant="circular"
            sx={{
              height: 22,
              width: 22,
              fontSize: 14,
              color: 'white',

              bgcolor: 'primary.main',
            }}
          >
            <Typography fontSize={12} fontWeight={'bold'}>
              ᕫ
            </Typography>{' '}
          </Avatar>
        }
        color="secondary"
        sx={{
          color: 'white',
          display: isSm ? 'none' : 'flex',
          fontSize: 14,
        }}
        variant="text"
      >
        <Typography
          variant="overline"
          sx={{
            color: 'primary.light',
          }}
          fontWeight={'bold'}
        >
          <span style={{ textTransform: 'lowercase' }}>x </span>
          {formatUosBalance(
            account?.data?.core_liquid_balance?.split(' ')[0] || 0,
          )}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          variant: 'elevation',
          elevation: 2,
          sx: {
            bgcolor: 'background.paper',
            overflow: 'visible',
            borderColor: 'divider',
            borderWidth: 1,
            borderStyle: 'solid',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box gap={4} px={2}>
          <Divider textAlign="left">
            <Typography variant="subtitle2" fontWeight={'bold'}>
              Transfer UOS
            </Typography>
          </Divider>

          <InputUosPrice
            value={parseFloat(quantity || '')}
            handleValueChange={handleQuantityChange}
            error={quantity === undefined || parseFloat(quantity) < 0.0000001}
            placeholder="e.g: 0.0000001"
            helperText={
              quantity === undefined || parseFloat(quantity) < 0.0000001
                ? 'Incorrect amount'
                : undefined
            }
          />
          <Divider textAlign="left">
            <Typography variant="subtitle2" fontWeight={'bold'}>
              To
            </Typography>
          </Divider>

          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Avatar
              sx={{
                mr: 1,
                my: 1,
              }}
            />
            <TextField
              fullWidth
              id="input-with-sx"
              variant="outlined"
              size="small"
              type="text"
              value={to}
              onChange={handleToChange}
              placeholder={'e.g: accountname'}
              sx={{
                mt: 1,
              }}
              inputProps={{
                sx: {
                  bgcolor: 'background.paper',
                  borderColor: '1px solid #ffffff9a',
                },
              }}
              error={to === undefined || !isUltraAccount(to)}
              helperText={
                (to === undefined || !isUltraAccount(to)) &&
                'Incorrect account name'
              }
              required={true}
            />
          </Box>
          <Divider textAlign="left">
            <Typography variant="subtitle2" fontWeight={'bold'}>
              Memo{' '}
              <span style={{ opacity: 0.7, fontWeight: 'normal' }}>
                (optional)
              </span>
            </Typography>
          </Divider>

          <TextField
            fullWidth
            id="input-with-sx"
            variant="outlined"
            size="small"
            type="text"
            value={memo}
            onChange={handleMemoChange}
            placeholder={'e.g: Transfered with love'}
            sx={{
              mt: 1,
            }}
            inputProps={{
              sx: {
                bgcolor: 'background.paper',
                borderColor: '1px solid #ffffff9a',
              },
            }}
            required={false}
          />
          <Stack direction="row" justifyContent="flex-end" mt={2}>
            <Button
              onClick={onClickTransfer}
              variant="contained"
              disabled={
                to !== undefined &&
                isUltraAccount(to) &&
                quantity !== undefined &&
                parseFloat(quantity) > 0.0000001
                  ? false
                  : true
              }
            >
              Transfer
            </Button>
          </Stack>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
