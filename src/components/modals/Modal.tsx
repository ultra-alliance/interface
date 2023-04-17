import React from 'react';
import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Typography,
  Button,
  Box,
  Divider,
  Stack,
  IconButton,
} from '@mui/material/';
import { AccountBoxRounded, CloseRounded } from '@mui/icons-material';
import useBreakPoint from '@/hooks/useBreakpoint';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  boxShadow: 24,
  borderRadius: 2,
  overflow: 'hidden' as 'hidden',
};

const mobileStyle = {
  position: 'absolute' as 'absolute',
  top: '0%',
  left: '0%',
  width: '100vw',
  minHeight: '100vh',
  bgcolor: 'background.paper',
  border: 'none',
  borderColor: 'transparent',
  boxShadow: 0,
  borderRadius: 0,
  overflow: 'hidden' as 'hidden',
};

type ModalProps = MuiModalProps & {
  title: string;
};

Modal.defaultProps = {
  title: 'Modal',
  children: <Typography>Modal content</Typography>,
};

export default function Modal({ title, ...props }: ModalProps) {
  const { isSm } = useBreakPoint();
  return (
    <MuiModal {...props}>
      <React.Fragment>
        <Box sx={isSm ? mobileStyle : style}>
          <Stack
            direction="row"
            justifyContent={'space-between'}
            alignItems="center"
            padding={2}
          >
            <Typography
              paddingLeft={4}
              variant="h6"
              component="h2"
              fontWeight={'bold'}
            >
              {title}
            </Typography>
            <IconButton
              onClick={() => {
                if (props.onClose) {
                  props.onClose({}, 'backdropClick');
                }
              }}
            >
              <CloseRounded />
            </IconButton>
          </Stack>
          <Divider />
          {props.children}
        </Box>
      </React.Fragment>
    </MuiModal>
  );
}
