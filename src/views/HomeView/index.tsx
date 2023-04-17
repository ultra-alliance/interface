import React, { useState, useEffect, useCallback } from 'react';
import {
  Grid,
  Typography,
  Zoom,
  Box,
  LinearProgress,
  Stack,
  Chip,
  TextField,
  Avatar,
  Divider,
  useMediaQuery,
  Theme,
  IconButton,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  tUniq,
  getZipContent,
  type tManifest,
  type tUniqManifested,
} from '@ultra-alliance/ultra-sdk';
import { useUltra, useUltraQuery } from '@ultra-alliance/react-ultra';
import HTMLHead from '../shared/HTMLHead';
import App from '../shared/layouts/App';
import { LoadingIndicator, SearchBar, UniqCard } from '@/components';
import { Search } from '@mui/icons-material';
import usePageRedirect from '@/hooks/usePageRedirect';
import { toast } from 'react-toastify';

const ITEM_PER_PAGE = 8;
const THRESHOLD = 200;

const HomeView = () => {
  const { ultra } = useUltra();
  const [page, setPage] = useState(0);
  const [uniqs, setUniqs] = useState<tUniqManifested[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [search, setSearch] = useState('');
  const { goToUniq } = usePageRedirect();
  const { data, error, isLoading, fetchData } = useUltraQuery({
    queryFn: async () => {
      let uniq = await ultra?.getUniqDetail(search);
      if (uniq) {
        return uniq;
      }
      return undefined;
    },
    callback: data => {
      if (data) {
        goToUniq(data.id);
      }
    },
    onError: error => {
      toast(error.message, { type: 'error' });
    },
    autofetch: false,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = async () => {
    fetchData();
  };

  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const loadMoreUniqs = async () => {
    if (!ultra || isLoadingMore) {
      return;
    }

    const startIdx = page * ITEM_PER_PAGE;
    const endIdx = startIdx + ITEM_PER_PAGE;

    setIsLoadingMore(true);

    const newUniqs: tUniqManifested[] = [];
    for (let i = startIdx + 1; i <= endIdx; i++) {
      // Changed this line
      const res = await ultra.getUniqManifested(i);
      console.log(res);

      if (res) {
        newUniqs.push(res);
      }
    }

    setUniqs(prevUniqs => [...prevUniqs, ...newUniqs]);
    setPage(prevPage => prevPage + 1);
    setIsLoadingMore(false);
  };

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom && !isLoadingMore) {
      loadMoreUniqs();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    loadMoreUniqs();
  }, []);

  return (
    <>
      <HTMLHead />
      <App footer={false}>
        <>
          <Stack
            direction={isSm ? 'column' : 'row'}
            alignItems={isSm ? 'flex-start' : 'center'}
          >
            <Typography variant="h5">NFT Factories</Typography>
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
              error={!!error}
              placeholder="Factory ID (e.g. 12)"
            />
          </Stack>
          <Divider>
            {' '}
            <Chip
              variant="filled"
              sx={{ borderRadius: 2, p: 1 }}
              label={uniqs.length}
              avatar={<Avatar src="/uniq-icon.svg" />}
            />
          </Divider>
          {uniqs.length === 0 && isLoadingMore ? (
            <Box sx={{ width: '100%' }}>
              <LoadingIndicator />
            </Box>
          ) : (
            <Grid container rowSpacing={2} columnSpacing={2}>
              {uniqs.map((uniq, index) => (
                <Zoom
                  in={true}
                  key={`${uniq.uniq.id}-${index}-uniq`}
                  style={{
                    transitionDelay: `${
                      index > ITEM_PER_PAGE ? 0 : index * 100
                    }ms`,
                  }}
                  unmountOnExit
                >
                  <Grid item lg={3} xs={12} sm={6} md={4}>
                    <UniqCard
                      manifest={uniq.manifest}
                      uniq={uniq.uniq}
                      onClick={() => goToUniq(uniq.uniq.id)}
                    />
                  </Grid>
                </Zoom>
              ))}
            </Grid>
          )}
          {isLoadingMore && uniqs.length !== 0 ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : null}
        </>
      </App>
    </>
  );
};

export default HomeView;
