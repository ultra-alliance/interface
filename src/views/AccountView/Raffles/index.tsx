import TabPanel from '@/components/atoms/TabPannel';
import RaffleCard from '@/components/molecules/RaffleCard';
import RaffleParticipationCard from '@/components/molecules/RaffleParticipationCard';
import usePageRedirect from '@/hooks/usePageRedirect';
import usePagination from '@/hooks/usePagination';
import { tParticipant, tRaffle } from '@/types';
import RaffleService from '@/utilities/contract-helpers/RaffleService';
import CreateRaffle from '@/views/shared/modals/CreateRaffle';
import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  Grow,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import { useRouter } from 'next/router';
import React from 'react';

interface AccountRaffleProps {
  raffles?: tRaffle[];
  participants?: tParticipant[];
}

export default function AccountRaffle({
  raffles,
  participants,
}: AccountRaffleProps) {
  const { ultra } = useUltra();
  const { goToRaffle } = usePageRedirect();
  const [open, setOpen] = React.useState(false);
  const { account } = useUltra();
  const toggleOpenCreateRaffleModal = () => setOpen(curr => !curr);
  const { accountID } = useRouter().query;
  const IS_OWNER = account?.data?.account_name === accountID;
  const { currentPage, jump } = usePagination({});

  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    jump(newValue);
  };

  const {
    data: raffleParticipants,
    fetchData,
    isLoading,
  } = useUltraQuery({
    queryFn: async () => {
      const raffleService = new RaffleService(ultra);
      if (!participants) return [];
      let res: tRaffle[] = [];
      for (const part of participants) {
        let rffle = raffles?.find(raffle => raffle.id === part.raffle_id);
        if (!rffle) {
          rffle = await raffleService.getRaffleById(part.raffle_id);
        }
        res.push(rffle);
      }

      return res;
    },
    autofetch: participants !== undefined,
  });

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            value={currentPage}
            onChange={onTabChange}
            aria-label="basic tabs example"
            sx={{
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              '& .MuiTabs-indicator': {
                height: 3,
              },
            }}
          >
            <Tab label="CREATED" />
            <Tab label="PARTICIPATIONS" />
          </Tabs>
        </Box>
        <Box
          sx={{
            mt: 2,
          }}
        >
          <TabPanel value={currentPage} index={0}>
            {IS_OWNER && (
              <Button
                onClick={toggleOpenCreateRaffleModal}
                fullWidth
                variant="outlined"
                sx={{ color: 'primary.light', mb: 2 }}
                startIcon={<Add />}
              >
                Create a Raffle
              </Button>
            )}
            <Grid container spacing={3}>
              {raffles?.map(raffle => (
                <Grow in={true} key={raffle.id}>
                  <Grid item xs={12} sm={6} md={4}>
                    <RaffleCard
                      raffle={raffle}
                      onClick={() => goToRaffle(raffle.id)}
                    />
                  </Grid>
                </Grow>
              ))}
            </Grid>
            {!raffles?.length && (
              <Box
                sx={{
                  display: 'flex',
                  mt: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  No Raffles yet
                </Typography>
              </Box>
            )}
          </TabPanel>

          <TabPanel value={currentPage} index={1}>
            <Grid container spacing={3}>
              {participants?.map((participant, index) => (
                <Grow in={true} key={participant.id}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <RaffleParticipationCard
                      participation={participant}
                      raffle={raffleParticipants && raffleParticipants[index]}
                      onClick={() => goToRaffle(participant.raffle_id)}
                    />
                  </Grid>
                </Grow>
              ))}
            </Grid>
            {!participants?.length && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  mt: 2,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  No participations yet
                </Typography>
              </Box>
            )}
          </TabPanel>
        </Box>
      </Box>
      <CreateRaffle onClose={toggleOpenCreateRaffleModal} open={open} />
    </React.Fragment>
  );
}
