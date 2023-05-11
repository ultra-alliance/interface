import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import App from '../shared/layouts/App';
import MainView from '../shared/views/MainView';
import { useRouter } from 'next/router';
import About from './Overview/About';
import {
  formatTimeSinceNow,
  isUltraAccount,
  tGetAccountOutput,
} from '@ultra-alliance/ultra-sdk';
import usePagination from '@/hooks/usePagination';
import React from 'react';
import Wallet from './Overview/Wallet';
import UniqsInInventory from './Inventory/UniqsInInventory';
import { tParticipant, tRaffle, tWinner } from '@/types';
import AccountRaffle from './Raffles';
import RaffleService from '@/utilities/contract-helpers/RaffleService';

export default function AccountView() {
  const { currentPage, jump } = usePagination({ items: [], itemsPerPage: 10 });
  const { accountID } = useRouter().query;
  const { ultra, account } = useUltra();
  const { data, fetchData } = useUltraQuery({
    queryFn: async () => {
      const raffleService = new RaffleService(ultra);

      let data: any = {
        account: undefined,
        uniqs: undefined,
        raffles: undefined,
        participants: undefined,
        winners: undefined,
        test: undefined,
      };

      data.account = await ultra?.api.getAccount({
        accountName: accountID as string,
      });
      data.uniqs = await ultra?.api.getUniqsOwned(accountID as string);
      try {
        data.raffles =
          (await raffleService.getRafflesByInfluencer(accountID as string)) ||
          [];
        data.participants =
          (await raffleService.getAccountParticipations(accountID as string)) ||
          [];
        data.winners =
          (await raffleService.getAccountWins(accountID as string)) || [];
      } catch (e) {
        console.log(e);
      }

      return data;
    },

    autofetch: true,
  });

  React.useEffect(() => {
    if (accountID) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountID]);

  const IS_CURRENT_ACCOUNT =
    (accountID as string) === account?.data?.account_name;

  const menus = [
    {
      id: 1,
      name: 'Overview',
      link: '/account/overview',
      onClick: () => {},
      tabContent: (
        <>
          <Wallet
            uniqsAmount={data?.uniqs?.rows?.length}
            coreLiquidBalance={data?.account?.core_liquid_balance}
            onClickSeeInventory={() => {
              jump(2);
            }}
          />
          <About account={data?.account} />
        </>
      ),
    },
    {
      id: 2,
      name: 'Inventory',
      link: '/account/inventory',
      onClick: () => {},
      tabContent: (
        <>
          <UniqsInInventory
            uniqsOwned={data?.uniqs?.rows}
            withActions={IS_CURRENT_ACCOUNT}
            withViewButton={true}
            onActionComplete={() => {
              fetchData();
            }}
          />
        </>
      ),
    },
    {
      id: 3,
      disabled: true,
      name: 'Raffles',
      link: '/account/raffles',
      onClick: () => {},
      tabContent: (
        <AccountRaffle
          raffles={data?.raffles}
          participants={data?.participants}
        />
      ),
    },
  ];

  return (
    <>
      <App>
        <MainView
          cardMenuProps={{
            AvatarProps: {
              src: isUltraAccount(data?.account?.account_name || '')
                ? 'https://pbs.twimg.com/profile_images/1392037656004022273/jFSkZjjb_400x400.png'
                : undefined,
            },
            name: data?.account?.account_name,
            overlineText: `Joined Ultra ${formatTimeSinceNow(
              data?.account?.created,
            )}`,
            menus,
            page: currentPage,
            onTabChange: (_e, v) => jump(v),
          }}
          isLoading={false}
        />
      </App>
    </>
  );
}
