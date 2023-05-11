import PageTitle from '@/components/molecules/PageTitle';
import RaffleCard from '@/components/molecules/RaffleCard';
import PayWith from '@/components/organisms/PayWith';
import { TxBetween } from '@/components/organisms/TxBetween';
import UosArrow from '@/components/organisms/UosArrow';
import usePageRedirect from '@/hooks/usePageRedirect';
import { tRaffle } from '@/types';
import { Casino, Done } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grow,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { CURRENCIES, useUltra } from '@ultra-alliance/react-ultra';
import { tUltra } from '@ultra-alliance/ultra-sdk';
import React from 'react';
import { toast } from 'react-toastify';

interface ReceiptProps {
  prev: () => void;
  next: () => void;
  raffle?: tRaffle;
}

export default function Receipt({ prev, next, raffle }: ReceiptProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <PageTitle title="Creating" fadedTitle="new raffle" icon={<Casino />} />
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
          >
            Awesome job! You{"'"}ve successfully created a new raffle.
          </Typography>
          <Typography variant="subtitle2" textAlign={'center'}>
            You can now view your raffle in your profile.
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

        <Button variant="contained" onClick={next}>
          View Raffle
        </Button>
      </Stack>
    </Container>
  );
}
