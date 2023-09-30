import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import App from '../shared/layouts/App';
import MainView from '../shared/views/MainView';
import { useRouter } from 'next/router';
import About from './Overview/About';
import { formatTimeSinceNow, isUltraAccount } from '@ultra-alliance/ultra-sdk';
import usePagination from '@/hooks/usePagination';
import React from 'react';
import Wallet from './Overview/Wallet';
import UniqsInInventory from './Inventory/UniqsInInventory';
import AccountRaffle from './Raffles';
import { queryRaffles } from '@/utilities/raffles';

export default function AccountView() {
  const { currentPage, jump } = usePagination({ items: [], itemsPerPage: 10 });
  const { accountID } = useRouter().query;
  const { ultra, account, chain, refreshAccount } = useUltra();
  const { data: raffleData, fetchData: fetchRaffleData } = useUltraQuery({
    queryFn: async () => await queryRaffles(ultra, accountID as string),
    autofetch: true,
  });

  const { data: ultraAccount, fetchData: fetchUltraAccount } = useUltraQuery({
    queryFn: async () =>
      await ultra?.account.fetchAccountData({
        account: accountID as string,
      }),
    autofetch: true,
  });

  const { data: avatarSrc, fetchData: fetchAvatar } = useUltraQuery({
    queryFn: async () =>
      await ultra?.account
        .fetchAccountData({
          account: accountID as string,
          withAvatarManifest: true,
        })
        .then(data => data.avatar.manifest?.manifest.media.images.square),
    autofetch: true,
  });

  const fetchAllData = async () => {
    const promises = [fetchRaffleData(), fetchUltraAccount()];
    if (!IS_CURRENT_ACCOUNT) {
      promises.push(fetchAvatar());
    }
    await Promise.all(promises);
  };

  React.useEffect(() => {
    if (accountID) {
      fetchAllData();
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
            uniqsAmount={ultraAccount?.ownedUniqs?.length}
            coreLiquidBalance={ultraAccount?.data?.core_liquid_balance}
            onClickSeeInventory={() => {
              jump(2);
            }}
          />
          <About account={ultraAccount?.data} />
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
            uniqsOwned={ultraAccount?.ownedUniqs}
            withActions={IS_CURRENT_ACCOUNT}
            withViewButton={true}
            onAvatarChange={async () => {
              await fetchAvatar();
              await refreshAccount();
            }}
            onActionComplete={() => {
              fetchUltraAccount();
            }}
          />
        </>
      ),
    },
    {
      id: 3,
      disabled: chain?.name !== 'local',
      name: 'Raffles',
      link: '/account/raffles',
      onClick: () => {},
      tabContent: (
        <AccountRaffle
          raffles={raffleData?.raffles}
          participants={raffleData?.participants}
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
              src: isUltraAccount(ultraAccount?.data?.account_name || '')
                ? 'https://pbs.twimg.com/profile_images/1392037656004022273/jFSkZjjb_400x400.png'
                : IS_CURRENT_ACCOUNT
                ? account?.avatar.manifest?.manifest.media.images.square
                : avatarSrc,
            },
            name: ultraAccount?.data?.account_name,
            overlineText: `Joined Ultra ${formatTimeSinceNow(
              ultraAccount?.data?.created,
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
