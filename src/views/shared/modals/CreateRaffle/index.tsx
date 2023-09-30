import * as React from 'react';
import { Create, Receipt as ReceiptIcon } from '@mui/icons-material';
import { AppBar, Container, Toolbar } from '@mui/material';
import Modal from '@/components/modals/Modal';
import usePagination from '@/hooks/usePagination';
import Stepper from '@/components/molecules/Stepper';
import CloseButton from '@/components/atoms/CloseButton';
import Receipt from './Receipt';

import ReviewCreateRaffle from './Review';

type BuyUniqProps = {
  open: boolean;
  onClose?: () => void;
};

const steps = [
  {
    label: 'Create',
    icon: <Create />,
  },
  {
    label: 'Receipt',
    icon: <ReceiptIcon />,
  },
];

let window: Window;

export default function CreateRaffle({ open, onClose }: BuyUniqProps) {
  const { currentPage, next, prev } = usePagination({
    startingPage: 0,
  });
  return (
    <React.Fragment>
      <Modal
        fullWidth={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={onClose}
        sx={{
          overflow: 'scroll',
        }}
        header={
          <AppBar
            position="fixed"
            elevation={1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: 'none',
              borderBottom: '1px solid',
              px: 2,
              py: 2,
              borderColor: 'divider',
              bgcolor: '#3C3846',
            }}
          >
            <Container>
              <Toolbar
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Stepper steps={steps} activeStep={currentPage} />
              </Toolbar>
            </Container>
            <CloseButton onClick={onClose} />
          </AppBar>
        }
      >
        {currentPage === 0 ? (
          <ReviewCreateRaffle
            prev={() => (onClose ? onClose() : null)}
            next={() => next()}
          />
        ) : (
          <Receipt
            prev={() => prev()}
            next={() => (onClose ? onClose() : null)}
          />
        )}
      </Modal>
    </React.Fragment>
  );
}
