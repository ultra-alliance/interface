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
  Toolbar,
} from '@mui/material/';
import { AccountBoxRounded, CloseRounded } from '@mui/icons-material';
import useBreakPoint from '@/hooks/useBreakpoint';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.default',
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
  bgcolor: 'background.default',
  border: 'none',
  borderColor: 'transparent',
  boxShadow: 0,
  borderRadius: 0,
  overflow: 'scroll' as 'scroll',
};

type ModalProps = MuiModalProps & {
  title?: string;
  fullWidth?: boolean;
  header?: React.ReactNode;
};

Modal.defaultProps = {
  title: 'Modal',
  fullWidth: false,
  children: <Typography>Modal content</Typography>,
};

export default function Modal({
  title,
  fullWidth,
  header,
  ...props
}: ModalProps) {
  const { isSm } = useBreakPoint();
  return (
    <MuiModal
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(20px)',
          },
        },
      }}
      {...props}
    >
      <React.Fragment>
        <Box sx={isSm || fullWidth ? mobileStyle : style}>
          {header || (
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
                sx={{
                  borderRadius: 2,
                }}
              >
                <CloseRounded />
              </IconButton>
            </Stack>
          )}
          <Divider />
          {header && <Toolbar sx={{ mb: isSm ? 0 : 6 }} />}
          {props.children}
        </Box>
      </React.Fragment>
    </MuiModal>
  );
}
