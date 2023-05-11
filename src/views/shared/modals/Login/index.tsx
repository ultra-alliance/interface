import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccountBoxRounded } from '@mui/icons-material';
import {
  Avatar,
  Box,
  ButtonProps,
  Divider,
  FormControl,
  Stack,
  TextField,
} from '@mui/material';
import { useUltra } from '@ultra-alliance/react-ultra';
import Modal from '@/components/modals/Modal';
import { LINKS } from '@ultra-alliance/ultra-sdk';
import Account from './Account';
import { toast } from 'react-toastify';

interface ZoneProps {
  purple?: boolean;
  title?: string;
  text?: string;
  buttonTxt?: string;
  buttonProps?: ButtonProps;
}

const Zone = ({
  purple = false,
  title = undefined,
  text = undefined,
  buttonTxt = undefined,
  buttonProps = undefined,
}: ZoneProps) => {
  return (
    <Stack
      bgcolor={purple ? 'primary.main' : ''}
      padding={4}
      direction="column"
      spacing={2}
    >
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        fontWeight={'bold'}
      >
        {title}
      </Typography>
      <Typography id="modal-modal-description">{text}</Typography>
      <Button color={purple ? 'secondary' : 'primary'} {...buttonProps}>
        {buttonTxt}
      </Button>
    </Stack>
  );
};

interface LoginProps {
  opener?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  onSuccessLogin?: () => void;
  withAccountModal?: boolean;
}

export default function Login({
  opener,
  isOpen,
  onClose,
  onSuccessLogin,
  withAccountModal = true,
}: LoginProps) {
  const { ultra, login, isAuthenticated, isWalletInstalled } = useUltra();

  const [open, setOpen] = React.useState(isOpen !== undefined ? true : false);
  const [isToasted, setIsToasted] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  React.useEffect(() => {
    setOpen(isOpen !== undefined ? isOpen : false);
  }, [isOpen]);

  const onClickLogin = async () => {
    handleClose();
    setIsToasted(true);
    toast.promise(
      login({
        throwOnError: true,
      }).then(() => {
        setIsToasted(false);
        if (onSuccessLogin) onSuccessLogin();
      }),
      {
        pending: 'Check your Ultra Wallet to login',
        success: 'Connected to Ultra Wallet 🎉',
        error: 'We could not connect to your Ultra Wallet 😢',
      },
    );
  };

  function renderConnectZone() {
    return (
      <Zone
        title="Connect to your Ultra Wallet"
        buttonTxt="Connect"
        text="Seems like you have the Ultra Wallet installed, click to login to your Ultra account."
        buttonProps={{
          onClick: onClickLogin,
          variant: 'contained',
          startIcon: <AccountBoxRounded />,

          fullWidth: true,
        }}
      />
    );
  }

  function renderDownloadExtensionZone() {
    return (
      <Zone
        title="Don't have the Ultra Wallet ?"
        text="No worries, you can dowload it securely from the official Ultra website"
        buttonTxt="Get the wallet"
        buttonProps={{
          variant: 'contained',
          fullWidth: true,
          onClick: () => {
            window.open(LINKS.DOWNLOAD_WALLET, '_blank');
          },
        }}
      />
    );
  }

  function renderDownloadUltraZone() {
    return (
      <Zone
        purple
        title="Download Ultra Client !"
        text="You can download the Ultra client to access all features on Windows"
        buttonTxt="Download Ultra"
        buttonProps={{
          startIcon: (
            <Avatar
              sx={{
                bgcolor: 'transparent',
              }}
              imgProps={{
                sx: {
                  width: 25,
                  height: 25,
                },
              }}
              src={
                'https://s2.qwant.com/thumbr/0x0/5/2/416c3d9af944cae1d8a82c81f749c265c2281ebb2688647015a5e3fb53b916/os-windows-xxl.png?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fos-windows-xxl.png&q=0&b=1&p=0&a=0'
              }
            />
          ),
          variant: 'contained',
          fullWidth: true,
          onClick: () => {
            window.open(LINKS.DOWNLOAD_ULTRA, '_blank');
          },
        }}
      />
    );
  }

  return (
    <React.Fragment>
      {isAuthenticated && withAccountModal ? (
        <Account />
      ) : (
        <>
          {opener || (
            <Button
              onClick={handleOpen}
              startIcon={<AccountBoxRounded />}
              color="secondary"
              sx={{
                color: 'white',
              }}
              variant="text"
            >
              Connect
            </Button>
          )}
        </>
      )}

      <Modal
        title={'Connect Ultra account'}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose}
      >
        <React.Fragment>
          {renderDownloadUltraZone()}
          {isWalletInstalled
            ? renderConnectZone()
            : renderDownloadExtensionZone()}
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
}
