import React from 'react';

import App from '../shared/layouts/App';

import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import { Box, Divider, Grid, Stack, Zoom } from '@mui/material';
import PageTitle from '@/components/molecules/PageTitle';
import { Casino } from '@mui/icons-material';
import { LoadingIndicator } from '@/components';
import RaffleCard from '@/components/molecules/RaffleCard';
import { tRaffle } from '@/types';
import usePageRedirect from '@/hooks/usePageRedirect';
import useBreakPoint from '@/hooks/useBreakpoint';
import RaffleService from '@/utilities/contract-helpers/RaffleService';

const RafflesView = () => {
  const { ultra } = useUltra();
  const { isSm } = useBreakPoint();
  const { goToRaffle } = usePageRedirect();

  const { data: raffles, isLoading: rafflesLoading } = useUltraQuery<
    void,
    tRaffle[] | undefined
  >({
    queryFn: async () => {
      const raffleService = new RaffleService(ultra);

      const result = await raffleService.getRaffles();
      if (!result) return undefined;

      // const res = await ultra?.api.getTableRows({
      //   code: 'rfflcntract1',
      //   scope: 'rfflcntract1',
      //   table: 'raffles',
      // });
      // if (!res) return undefined;

      // return res?.rows as unknown as tRaffle[];
      return result;
    },
    autofetch: true,
  });

  return (
    <>
      <App footer={false}>
        <React.Fragment>
          <Stack
            direction={isSm ? 'column' : 'row'}
            alignItems={isSm ? 'flex-start' : 'center'}
          >
            <PageTitle
              icon={<Casino />}
              title="Raffles"
              fadedTitle={`(${raffles?.length})`}
            />
          </Stack>
          <Divider />
          {rafflesLoading && (
            <Box width={'100%'}>
              <LoadingIndicator />
            </Box>
          )}
          <Grid container rowSpacing={3} columnSpacing={3}>
            {raffles &&
              raffles?.map((raffle, index) => (
                <Zoom
                  in={true}
                  key={raffle.id}
                  style={{
                    transitionDelay: `${index > 10 ? 0 : index * 100}ms`,
                  }}
                  unmountOnExit
                >
                  <Grid item lg={3} xs={12} sm={6} md={4}>
                    <RaffleCard
                      raffle={raffle}
                      onClick={() => goToRaffle(raffle.id)}
                    />
                  </Grid>
                </Zoom>
              ))}
          </Grid>
        </React.Fragment>
      </App>
    </>
  );
};

export default RafflesView;
