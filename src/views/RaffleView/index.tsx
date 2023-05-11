/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import App from '../shared/layouts/App';
import usePagination from '@/hooks/usePagination';
import { useRouter } from 'next/router';
import {
  useUltraQuery,
  useUltra,
  CURRENCIES,
} from '@ultra-alliance/react-ultra';
import MainView from '../shared/views/MainView';
import UniqsInInventory from '../AccountView/Inventory/UniqsInInventory';
import {
  formatCurrencyValue,
  formatNumeralAbreviation,
  formatTimeSinceNow,
} from '@ultra-alliance/ultra-sdk';
import InfoCard from '@/components/molecules/InfoCard';
import { tParticipant, tPopulatedRaffle, tRaffle, tWinner } from '@/types';
import {
  Avatar,
  Button,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import RaffleChipState from '@/components/molecules/RaffleChipState';
import useBreakPoint from '@/hooks/useBreakpoint';
import DataList from '@/components/lists/DataList';
import AssetAmount from '@/components/molecules/AssetAmount';
import AccountAvatar from '@/components/molecules/AccountAvatar';
import usePageRedirect from '@/hooks/usePageRedirect';
import RaffleService from '@/utilities/contract-helpers/RaffleService';

export default function RaffleView() {
  const { ultra, isAuthenticated, account } = useUltra();
  const { currentPage, jump } = usePagination({});
  const router = useRouter();
  const { raffleID } = router.query;
  const { isLg } = useBreakPoint();
  const { goToAccount } = usePageRedirect();

  const {
    data: raffle,
    isLoading,
    fetchData,
  } = useUltraQuery<any, tPopulatedRaffle | undefined>({
    queryFn: async () => {
      const raffleService = new RaffleService(ultra);
      const res = await raffleService.getPopulatedRaffle(raffleID as string);
      return res;
    },
    callback: () => {},
    autofetch: false,
  });

  React.useEffect(() => {
    if (raffleID) {
      fetchData();
    }
  }, [raffleID]);

  const IS_INFLUENCER_CREATOR =
    account?.data?.account_name === raffle?.influencer;

  const baseMenus = [
    {
      id: 1,
      name: 'Rewards',
      link: '/rewards',
      onClick: () => {},
      tabContent: (
        <>
          <InfoCard title="Raffle rewards ">
            <DataList
              listItems={[
                {
                  visible: true,
                  primaryText: 'Total Liquid Rewards',
                  tooltip:
                    "The total amount of liquid rewards in the raffle's pool",
                  secondaryAction: (
                    <>
                      <Typography color={'primary.light'}>
                        x{' '}
                        <span style={{ fontWeight: 'bold' }}>
                          {formatCurrencyValue({
                            value: raffle?.reward_amount || 0,
                            ticker: '',
                          })}
                        </span>
                      </Typography>
                      <Avatar
                        variant="circular"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          fontWeight: 900,
                          width: 30,
                          height: 30,
                          fontSize: 15,
                        }}
                      >
                        ᕫ
                      </Avatar>
                    </>
                  ),
                },
                {
                  visible: true,
                  primaryText: 'Uniqs as rewards',
                  tooltip: "The number of uniqs the raffle's pool contains",
                  secondaryAction: (
                    <>
                      <AssetAmount amount={0} srcSet="/uniq-icon.svg" />
                    </>
                  ),
                },
              ]}
            />
          </InfoCard>
        </>
      ),
    },
  ];

  if (raffle?.active) {
    baseMenus.push(
      {
        id: baseMenus.length + 1,
        name: `Participants (${formatNumeralAbreviation(
          raffle?.participants.length,
        )})`,
        link: '/participants',
        onClick: () => {},
        tabContent: (
          <>
            <InfoCard title="Raffle participants ">
              {raffle?.participants.map((viewer, index) => (
                <List key={index}>
                  <ListItemButton onClick={() => goToAccount(viewer.viewer)}>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                      }}
                      primary={viewer.viewer}
                      secondary={
                        'Participated ' +
                        formatTimeSinceNow(viewer.participated_at)
                      }
                    />
                    {viewer.participated_at}
                  </ListItemButton>
                </List>
              ))}
            </InfoCard>
          </>
        ),
      },
      {
        id: baseMenus.length + 2,
        name: `Winners (${formatNumeralAbreviation(raffle?.winners.length)})`,
        link: '/winners',
        onClick: () => {},
        tabContent: (
          <>
            <InfoCard title="Raffle Winners">
              {raffle?.winners.map((winner, index) => (
                <List key={index}>
                  <ListItemButton onClick={() => goToAccount(winner.winner)}>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        fontWeight: 'bold',
                      }}
                      primary={winner.winner}
                      secondary={'Won ' + formatTimeSinceNow(winner.won_at)}
                    />
                  </ListItemButton>
                </List>
              ))}
            </InfoCard>
          </>
        ),
      },
    );
  }

  if (IS_INFLUENCER_CREATOR && !raffle?.closed) {
    baseMenus.push({
      id: baseMenus.length + 1,
      name: `Settings`,
      link: '/settings',
      onClick: () => {},
      tabContent: (
        <>
          <InfoCard title="Raffle settings ">
            <DataList
              listItems={[
                {
                  visible: true,
                  info: true,
                  primaryText: 'Activate raffle',
                  tooltip: 'Activate the raffle so that users can participate',
                  secondaryAction: (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={raffle?.active}
                    >
                      Activate
                    </Button>
                  ),
                },
                {
                  info: true,
                  visible: true,
                  primaryText: 'Close raffle',

                  tooltip:
                    'Close the raffle so that no more users can participate',
                  secondaryAction: (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={!raffle?.active}
                    >
                      Giveaway!
                    </Button>
                  ),
                },
              ]}
            />
          </InfoCard>
        </>
      ),
    });
  }

  return (
    <>
      <App footer={true}>
        <MainView
          cardMenuProps={{
            AvatarProps: {
              sx: {
                display: 'none',
              },
            },

            subName: 'RAFFLE #' + raffle?.id,
            name: 'by ' + raffle?.influencer,
            nameProps: {
              sx: {
                mt: 2,
              },
            },

            subNameProps: {
              sx: {
                fontWeight: 'normal',
              },
            },
            overlineText: (
              <RaffleChipState
                active={raffle?.active}
                closed={raffle?.closed}
              />
            ),
            onTabChange: (_e, v) => jump(v),
            menus: baseMenus,
            page: currentPage,
          }}
          isLoading={isLoading}
        />
      </App>
    </>
  );
}
