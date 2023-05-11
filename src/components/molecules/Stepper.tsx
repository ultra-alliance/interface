import * as React from 'react';
import {
  Step,
  StepLabel,
  Stack,
  styled,
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
  Typography,
} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { stepLabelClasses } from '@mui/material';
import useBreakPoint from '@/hooks/useBreakpoint';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 16,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    marginInline: 2,
    backgroundColor: '#ffffff6d',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.grey[700],
  zIndex: 1,
  color: 'white',
  background: 'transparent',
  border: '1px solid',
  borderColor: 'white',
  width: 35,
  height: 35,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '1px solid',
  outlineColor: 'transparent',
  outlineOffset: 2,
  opacity: 0.5,
  svg: {
    fontSize: 16,
  },
  mt: 2,

  ...(ownerState.active && {
    opacity: 1,
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    outlineColor: theme.palette.primary.light,
    color: 'white',
  }),
  ...(ownerState.completed && {
    opacity: 1,
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: 'white',
  }),
}));

const ColorlibStepLabel = styled(StepLabel)(({ theme }) => ({
  [`& .${stepLabelClasses.label}`]: {
    fontWeight: 'bold',
    [`&.${stepLabelClasses.completed}`]: {
      color: theme.palette.primary.light,
    },
    [`&.${stepLabelClasses.active}`]: {
      color: theme.palette.primary.light,
    },

    color: 'white',
  },
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icon}
    </ColorlibStepIconRoot>
  );
}

type Steps = {
  label?: string;
  icon?: React.ReactElement;
};

type StepperProps = MuiStepperProps & {
  steps: Steps[];
};

export default function Stepper({ steps, ...props }: StepperProps) {
  const { isSm } = useBreakPoint();
  return (
    <Stack sx={{ width: '100%' }}>
      <MuiStepper
        connector={
          <ColorlibConnector
            sx={{
              width: isSm ? '5px' : '100%',
            }}
          />
        }
        sx={{
          width: isSm ? 'fit-content' : '100%',
        }}
        orientation={isSm ? 'vertical' : 'horizontal'}
        {...props}
      >
        {steps.map(step => (
          <Step key={step?.label} sx={{}}>
            <ColorlibStepLabel
              slotProps={{
                label: {
                  style: {
                    marginTop: 0,
                    marginBottom: 0,
                  },
                },
              }}
              sx={{}}
              StepIconProps={{
                icon: step?.icon,
              }}
              StepIconComponent={ColorlibStepIcon}
            >
              <Typography width={'fit-content'} variant="overline">
                {step?.label}
              </Typography>
            </ColorlibStepLabel>
          </Step>
        ))}
      </MuiStepper>
    </Stack>
  );
}
