import React, { useState, useEffect, useCallback } from 'react';
import {
  Grid,
  Typography,
  Zoom,
  Box,
  LinearProgress,
  Stack,
  Chip,
  Avatar,
  Divider,
  useMediaQuery,
  Theme,
} from '@mui/material';
import { type tFactoryManifested } from '@ultra-alliance/ultra-sdk';
import { useUltra } from '@ultra-alliance/react-ultra';
import App from '../shared/layouts/App';
import { LoadingIndicator, SearchBar, UniqCard } from '@/components';
import usePageRedirect from '@/hooks/usePageRedirect';
import { toast } from 'react-toastify';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import PageTitle from '@/components/molecules/PageTitle';
import { Factory } from '@mui/icons-material';

const FactoriesView = () => {
  const { ultra } = useUltra();
  const [search, setSearch] = useState('');
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const ITEM_PER_PAGE = isSm ? 4 : 8;
  const { goToFactory } = usePageRedirect();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = async () => {
    try {
      let uniq = await ultra?.api.getFactory(search);
      if (!uniq || uniq === undefined) throw new Error('No Uniqs Found');
      goToFactory(uniq.id);
    } catch (err) {
      toast('No Uniqs Found', { type: 'error' });
    }
  };

  const {
    data: factories,
    isLoading,
    START_INDEX,
    END_INDEX,
    setPage,
    page,
    fetchData,
  } = useInfiniteScroll<void, tFactoryManifested[] | undefined>({
    ultraQueryParams: {
      queryFn: async () => {
        if (!ultra || isLoading) {
          return [];
        }

        let alreadyLoaded: tFactoryManifested[] = factories || [];
        for (let i = START_INDEX + 1; i <= END_INDEX; i++) {
          let uniq = await ultra.api.getFactoryManifested(i, {
            square: true,
          });
          if (uniq) {
            alreadyLoaded.push(uniq);
          }
        }
        setPage((prev: number) => prev + 1);
        return alreadyLoaded;
      },

      autofetch: false,
    },
    itemPerPage: ITEM_PER_PAGE,
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <App footer={false}>
        <>
          <Stack
            direction={isSm ? 'column' : 'row'}
            alignItems={isSm ? 'flex-start' : 'center'}
          >
            <PageTitle
              title={'Uniq'}
              fadedTitle={'Factories'}
              icon={<Factory />}
            />
            <Box
              sx={{
                flexGrow: 1,
                mb: isSm ? 2 : 0,
              }}
            />{' '}
            <SearchBar
              label="Search a Factory"
              onInputChange={handleSearch}
              onSearch={onClickSearch}
              inputValue={search}
              placeholder="Factory ID (e.g. 12)"
              error={false}
            />
          </Stack>
          <Divider />

          {factories?.length === 0 && isLoading ? (
            <Box sx={{ width: '100%' }}>
              <LoadingIndicator />
            </Box>
          ) : (
            <Grid container rowSpacing={2} columnSpacing={2}>
              {factories?.map((factory: tFactoryManifested, index: number) => (
                <Zoom
                  in={true}
                  key={`${factory.data.id}-${index}-uniq`}
                  style={{
                    transitionDelay: `${
                      index > ITEM_PER_PAGE ? 0 : index * 100
                    }ms`,
                  }}
                  unmountOnExit
                >
                  <Grid item lg={3} xs={12} sm={6} md={4}>
                    <UniqCard
                      manifest={factory.manifest}
                      uniq={factory.data}
                      onClick={() => goToFactory(factory.data.id)}
                    />
                  </Grid>
                </Zoom>
              ))}
            </Grid>
          )}
          {isLoading && factories?.length !== 0 ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
        </>
      </App>
    </>
  );
};

export default FactoriesView;
