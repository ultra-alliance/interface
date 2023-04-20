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

export default function UniqView() {
  const { ultra } = useUltra();
  const { currentPage, jump } = usePagination({ items: [], itemsPerPage: 10 });
  const router = useRouter();
  const { uniqId } = router.query;

  const {
    data: uniq,
    isLoading,
    fetchData,
  } = useUltraQuery({
    queryFn: async () => {
      return await ultra?.getUniqManifested(uniqId as string);
    },
    callback: data => {},
    autofetch: false,
  });

  React.useEffect(() => {
    if (uniqId) {
      fetchData();
    }
  }, [uniqId]);

  return (
    <>
      <App footer={true}>
        <MainView
          cardMenuProps={{
            AvatarProps: {
              src: uniq?.manifest.media?.images?.square,
            },
            name: uniq?.manifest.name,
            subName: uniq?.manifest.subName,
            overlineText: `${uniq?.uniq?.minted_tokens_no} / ${uniq?.uniq?.max_mintable_tokens} MINTED`,
            onTabChange: (_e, v) => jump(v),
            menus: [
              {
                id: 1,
                name: 'Overview',
                link: '/account/overview',
                onClick: () => {},
                tabContent: (
                  <>
                    <Description description={uniq?.manifest?.description} />
                    <Information uniqData={uniq} />
                    <Specifications uniqData={uniq} />
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
                    <Pictures uniqData={uniq} />
                    <Details uniqData={uniq} />
                  </>
                ),
              },
            ],
            page: currentPage,
          }}
          isLoading={isLoading}
        />
      </App>
    </>
  );
}
