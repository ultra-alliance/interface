import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccountBoxRounded } from '@mui/icons-material';
import { Divider, FormControl, Stack, TextField } from '@mui/material';
import { useUltra } from '@ultra-alliance/react-ultra';
import Modal from '@/components/modals/Modal';
import { toast } from 'react-toastify';
import { LINKS } from '@ultra-alliance/ultra-sdk';
import Account from './Account';

type LoginProps = {};

let window: Window;

export default function Login({}: LoginProps) {
  const { ultra, login, isAuthenticated } = useUltra();
  const [address, setAddress] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClickLogin = async () => {
    handleClose();

    toast.promise(
      login(address, {
        throwOnError: true,
      }).catch((e: any) => {
        throw e;
      }),
      {
        pending: 'Logging in ...',
        success: 'Logged in, welcome back!',
        error: 'Failed to login',
      },
    );

    // const id = toast.loading("Loading account info");
    // const response: any = await ultra.myFunction({ accountName: address });
    // toast.dismiss(id);
    // if (response.status === "success") {
    //   toast.success("Account info loaded");
    // } else {
    //   toast.error("Account info failed");
    // }
  };

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <Account />
      ) : (
        <Button
          onClick={handleOpen}
          startIcon={<AccountBoxRounded />}
          color="secondary"
          sx={{ color: 'white' }}
          variant="text"
        >
          Login
        </Button>
      )}

      <Modal
        title={'Login to your Ultra account'}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={handleClose}
      >
        <React.Fragment>
          {typeof (window as any)?.ultra === 'object' ? (
            <Stack padding={4} direction="column" spacing={2}>
              <Typography id="modal-modal-description">
                Access your Ultra guild builder tool and manage your projects
                with your ultra wallet
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Connect | ᕫ
              </Button>
            </Stack>
          ) : (
            <Stack
              bgcolor={'primary.main'}
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
                {"Don't have a wallet ?"}
              </Typography>
              <Typography id="modal-modal-description">
                Now worries, you can dowload it securely from the official ᕫltra
                website
              </Typography>
              <Button
                type="link"
                variant="contained"
                color="secondary"
                fullWidth
                href={LINKS.DOWNLOAD_WALLET}
                target="_blank"
              >
                Download wallet{' '}
              </Button>
            </Stack>
          )}
          <Divider />
          <Stack padding={4} direction="column" spacing={2}>
            <Typography id="modal-modal-description">
              Or insert an account name and enter as view mode
            </Typography>
            <FormControl fullWidth>
              <TextField
                onChange={handleAddressChange}
                placeholder="eg: ultra.nft.ft"
                size="small"
              />
            </FormControl>
            <Button variant="contained" color="primary" onClick={onClickLogin}>
              Log-in
            </Button>
          </Stack>
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
}
