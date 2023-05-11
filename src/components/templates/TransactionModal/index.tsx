import CloseButton from '@/components/atoms/CloseButton';
import Modal from '@/components/modals/Modal';
import PageTitle, { PageTitleProps } from '@/components/molecules/PageTitle';
import Stepper from '@/components/molecules/Stepper';
import useBreakPoint from '@/hooks/useBreakpoint';
import usePagination from '@/hooks/usePagination';
import { Done, Receipt } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  ButtonProps,
  Container,
  Divider,
  Grow,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

export type TransactionSteps = {
  label?: string;
  icon?: React.ReactElement;
  content?: React.ReactNode;
  PageTitleProps: PageTitleProps;
};

export interface TransactionModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  activeStep: number;
  steps: TransactionSteps[];
  withReceipt?: {
    PageTitleProps: PageTitleProps;
    ButtonProps: ButtonProps;
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
  };
}

export default function TransactionModal({
  isVisible,
  onCloseModal,
  steps,
  activeStep,
  withReceipt,
}: TransactionModalProps) {
  const { isSm } = useBreakPoint();
  if (withReceipt) {
    steps.push({
      label: 'Receipt',
      icon: <Receipt />,
      PageTitleProps: withReceipt.PageTitleProps,
      content: (
        <React.Fragment>
          <Stack
            width={'100%'}
            justifyContent={'center'}
            direction="column"
            display={'flex'}
            alignItems={'center'}
            gap={2}
          >
            <Grow in={true}>
              <Avatar
                variant="circular"
                sx={{
                  bgcolor: 'success.main',
                  outline: '1px solid',
                  outlineColor: 'success.main',
                  border: '1px solid',
                  borderColor: 'white',
                  width: 80,
                  height: 80,
                }}
              >
                <Done
                  sx={{
                    width: 50,
                    height: 50,
                    color: 'white',
                  }}
                />
              </Avatar>
            </Grow>

            <Stack>
              <Typography
                variant="subtitle1"
                fontWeight={'bold'}
                textAlign={'center'}
                component={'div'}
              >
                {withReceipt.primary}
              </Typography>
              <Typography
                variant="subtitle2"
                textAlign={'center'}
                component={'div'}
              >
                {withReceipt.secondary}
              </Typography>
            </Stack>

            <Divider
              sx={{
                width: '100%',
                height: '0.5px',
                my: 2,
                bgcolor: 'divider',
              }}
            />

            <Button variant="contained" {...withReceipt.ButtonProps} />
          </Stack>
        </React.Fragment>
      ),
    });
  }

  return (
    <React.Fragment>
      <Modal
        fullWidth={true}
        open={isVisible}
        onClose={onCloseModal}
        sx={{
          overflow: 'scroll',
        }}
        header={
          <AppBar
            position={isSm ? 'relative' : 'fixed'}
            elevation={1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: isSm ? '' : 'center',
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
                <Stepper steps={steps} activeStep={activeStep} />
              </Toolbar>
            </Container>
            <CloseButton onClick={onCloseModal} />
          </AppBar>
        }
      >
        {steps[activeStep].PageTitleProps && (
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              pb: 2,
            }}
          >
            <PageTitle {...steps[activeStep].PageTitleProps} />
            {steps[activeStep].content}
          </Container>
        )}
      </Modal>
    </React.Fragment>
  );
}
