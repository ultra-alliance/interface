/* eslint-disable react-hooks/exhaustive-deps */
import { LoyaltyRounded, StorageRounded } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import React from 'react';
import HTMLHead from '../shared/HTMLHead';
import App from '../shared/layouts/App';
import CardMenu from '@/components/molecules/CardMenu';
import usePagination from '@/hooks/usePagination';
import { useRouter } from 'next/router';
import { useUltraQuery, useUltra } from '@ultra-alliance/react-ultra';
import Description from './Overview/Description';
import Information from './Overview/Information';
import Specifications from './Overview/Specification';
import Details from './Gallery/Details';
import Pictures from './Gallery/Pictures';
import MainView from '../shared/views/MainView';
import UniqsInInventory from '../AccountView/Inventory/UniqsInInventory';
import { formatNumeralAbreviation } from '@ultra-alliance/ultra-sdk';

export default function FactoryView() {
  const { ultra, isAuthenticated, account, refreshAccount } = useUltra();
  const { currentPage, jump } = usePagination({ items: [], itemsPerPage: 10 });
  const router = useRouter();
  const { factoryID } = router.query;

  const {
    data: factory,
    isLoading,
    fetchData,
  } = useUltraQuery({
    queryFn: async () => {
      return await ultra?.api.getFactoryManifested(factoryID as string, {
        square: true,
        hero: true,
        gallery: true,
        product: true,
      });
    },
    callback: data => {},
    autofetch: false,
  });

  const { data: ownedUniqs, fetchData: fetchOwnedUniq } = useUltraQuery({
    queryFn: async () => {
      if (!account?.data) {
        return undefined;
      }
      const filteredUniqsByFactory = account.ownedUniqs?.filter(
        uniq => String(uniq.token_factory_id) === String(factoryID),
      );

      return filteredUniqsByFactory;
    },
    callback: data => {},
    autofetch: false,
  });

  React.useEffect(() => {
    if (isAuthenticated) fetchOwnedUniq();
  }, [isAuthenticated]);

  React.useEffect(() => {
    if (factoryID) {
      fetchData();
    }
  }, [factoryID]);

  const baseMenus = [
    {
      id: 1,
      name: 'Overview',
      link: '/account/overview',
      onClick: () => {},
      tabContent: (
        <>
          <Description description={factory?.manifest?.description} />
          <Information uniqData={factory} />
          <Specifications
            uniqData={factory}
            isInfinityMint={factory?.data?.max_mintable_tokens === null}
          />
        </>
      ),
    },
    {
      id: 2,
      name: 'Gallery',
      link: '/account/gallery',
      onClick: () => {},
      tabContent: (
        <>
          <Pictures factoryData={factory} />
          <Details factoryData={factory} />
        </>
      ),
    },
  ];

  if (isAuthenticated) {
    baseMenus.push({
      id: 3,
      name: `Inventory (${ownedUniqs?.length})`,
      link: '/account/inventory',
      onClick: () => {},
      tabContent: (
        <>
          <UniqsInInventory
            uniqsOwned={ownedUniqs}
            withActions={true}
            withViewButton={false}
          />
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
              src: factory?.manifest.media?.images?.square,
            },
            name: factory?.manifest.name,
            subName: factory?.manifest.subName,
            overlineText: `${formatNumeralAbreviation(
              factory?.data.minted_tokens_no,
            )} / ${
              factory?.data?.max_mintable_tokens !== null
                ? formatNumeralAbreviation(factory?.data?.max_mintable_tokens)
                : '∞ '
            } MINTED`,
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
