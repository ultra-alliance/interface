import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import App from '../shared/layouts/App';
import MainView from '../shared/views/MainView';
import { useRouter } from 'next/router';
import About from './Overview/About';
import {
  formatTimeSinceNow,
  isUltraAccount,
  tGetAccountOutput,
  tGetUniqOwnedOutput,
} from '@ultra-alliance/ultra-sdk';
import usePagination from '@/hooks/usePagination';
import React from 'react';
import Wallet from './Overview/Wallet';
import UniqsInInventory from './Inventory/UniqsInInventory';

export default function AccountView() {
  const { currentPage, jump } = usePagination({ items: [], itemsPerPage: 10 });
  const { accountID } = useRouter().query;
  const { ultra } = useUltra();
  const { data, fetchData } = useUltraQuery({
    queryFn: async () => {
      const account = await ultra?.getAccount({
        accountName: accountID as string,
      });
      if (!account) {
        return {
          account: undefined,
          uniqs: undefined,
        };
      }
      const uniqs = await ultra?.getUniqsOwned(accountID as string);
      return {
        account,
        uniqs,
      };
    },
    callback: data => {},

    autofetch: true,
  });

  React.useEffect(() => {
    if (accountID) {
      fetchData();
    }
  }, [accountID]);

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
            menus: [
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
                    <UniqsInInventory uniqsOwned={data?.uniqs?.rows} />
                  </>
                ),
              },
            ],
            page: currentPage,
            onTabChange: (_e, v) => jump(v),
          }}
          isLoading={false}
        />
      </App>
    </>
  );
}
