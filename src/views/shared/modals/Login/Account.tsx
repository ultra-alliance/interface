import * as React from 'react';

import {
  AccountBoxRounded,
  GroupAddRounded,
  LogoutRounded,
  MoreHorizRounded,
  Telegram,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Button,
  Avatar,
  Chip,
  Typography,
  MenuList,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import useBreakPoint from '@/hooks/useBreakpoint';
import { useUltra } from '@ultra-alliance/react-ultra';
import {
  formatName,
  formatNumeralAbreviation,
  formatUosBalance,
} from '@ultra-alliance/ultra-sdk';
import { toast } from 'react-toastify';
import usePageRedirect from '@/hooks/usePageRedirect';
import TransferUos from './TransferUos';

export default function AvatarMenu() {
  const { logout, account } = useUltra();
  const { goToAccount } = usePageRedirect();
  const { isSm } = useBreakPoint();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickViewProfile = () => {
    goToAccount(account?.data?.account_name || '');
    handleClose();
  };

  const onClickLogout = () => {
    logout({
      throwOnError: true,
    }).then(() => {
      toast.success('Logged out');
    });

    handleClose();
  };

  const menus: any = [
    {
      name: 'View Profile',
      icon: <AccountBoxRounded sx={{ mr: 2 }} />,
      onClick: onClickViewProfile,
      divider: true,
    },

    {
      name: 'Log out',
      icon: <LogoutRounded sx={{ mr: 2 }} />,
      onClick: onClickLogout,
    },
  ];

  const renderUosBalance = (
    <Stack direction="row" spacing={1} alignItems={'center'}>
      <Avatar
        variant="circular"
        sx={{
          height: 22,
          width: 22,
          fontSize: 10,
          color: 'white',
          fontWeight: 'bold',
          bgcolor: 'primary.main',
        }}
      >
        ᕫ
      </Avatar>
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
    </Stack>
  );

  const renderUniqsBalance = (
    <Stack direction="row" spacing={1} alignItems={'center'}>
      <Avatar
        sx={{
          height: 22,
          width: 22,
          fontSize: 10,
          fontWeight: 'bold',
          bgcolor: 'grey.600',
        }}
        srcSet="/uniq-icon.svg"
        imgProps={{
          sx: {
            width: 17,
            height: 17,
          },
        }}
      />

      <Typography
        variant="overline"
        sx={{
          color: 'grey.300',
        }}
        fontWeight={'bold'}
      >
        <span style={{ textTransform: 'lowercase' }}>x </span>
        {formatNumeralAbreviation(account?.ownedUniqs?.length)}
      </Typography>
    </Stack>
  );

  return (
    <React.Fragment>
      <Stack direction="row" spacing={2} alignItems={'center'}>
        {!isSm && renderUniqsBalance}
        {!isSm && <Divider orientation="vertical" flexItem />}
        {!isSm && <TransferUos />}
        {!isSm && <Divider orientation="vertical" flexItem />}
        <Button
          onClick={handleClick}
          startIcon={
            isSm ? null : (
              <Avatar
                sx={{
                  height: 28,
                  width: 28,
                  mr: isSm ? 0 : 0.5,
                }}
                src={account?.avatar.manifest?.manifest.media.images.square}
              />
            )
          }
          color="secondary"
          sx={{ color: 'white' }}
          variant="text"
        >
          {isSm && account ? (
            <Avatar
              sx={{
                height: 28,
                width: 28,
                mr: isSm ? 0 : 0.5,
              }}
              src={account?.avatar.manifest?.manifest.media.images.square}
            />
          ) : (
            formatName({
              name: account?.data?.account_name || '',
              num: 3,
            })
          )}
        </Button>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          variant: 'elevation',
          elevation: 2,
          sx: {
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
        <MenuList disablePadding disableListWrap sx={{}}>
          {menus.map((menu: any, index: number) => (
            <div key={menu.name}>
              <MenuItem
                disabled={menu.disabled}
                onClick={menu.onClick}
                disableGutters
                disableTouchRipple
                sx={{
                  mx: 0.5,
                  px: 1,
                  py: 1,
                  borderRadius: 1,

                  transition: '0.2s',
                  '&:hover': {
                    color: 'primary.light',
                    backgroundColor: 'inherit',
                    svg: {
                      transition: '0.2s',

                      color: 'primary.light',
                    },
                  },
                  '&:active': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    svg: {
                      color: 'white',
                    },
                  },
                }}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText>{menu.name}</ListItemText>
              </MenuItem>
            </div>
          ))}
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}
